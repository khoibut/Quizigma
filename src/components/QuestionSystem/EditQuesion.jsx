import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router";
import Modal from "react-modal"
import AddImage from "../PopUp/AddImage";
import { withHistory } from "slate-history";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Editor } from "slate";
import { Text } from "slate";
function Leaf({ attributes, children, leaf }) {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }
    if (leaf.italic) {
        children = <em>{children}</em>
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }
    return <span {...attributes}>{children}</span>
}

function OptionStatus({ status, changeStatus, correctOptions, setCorrectOptions, optionIndex }) {
    if (status) {
        return <button type="button" onClick={() => { changeStatus(false); setCorrectOptions(correctOptions => correctOptions.filter(option => option != optionIndex)) }} className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold w-fit">Correct</button>
    }
    else {
        return <button type="button" onClick={() => { changeStatus(true); setCorrectOptions([...correctOptions, optionIndex]) }} className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold w-fit">Incorrect</button>
    }
}

function MultiChoiceOption(prop) {
    const [displayAnswer, setDisplayAnswer] = useState(prop.correctOptions.includes(prop.index))
    const [addImage, setAddImage] = useState(false)
    const [image, setImage] = useState(prop.option.image)
    let button = <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} correctOptions={prop.correctOptions} optionIndex={prop.index} setCorrectOptions={prop.setCorrectOptions} />
    function addImageToOption(base64Image) {
        prop.option.image = base64Image
        prop.options[prop.options.indexOf(prop.option)] = prop.option
        prop.setOptions(prop.options)
        setImage(base64Image)
    }
    return (
        <>
            <Modal
                isOpen={addImage}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#fff',
                        zIndex: 100
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <AddImage addButton={setAddImage} imageContainer={addImageToOption} />
            </Modal>
            <div className="flex gap-2 sm:gap-8 border-b-2 py-3 sm:px-1">
                <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="max-sm:max-w-[100px] max-sm:w-[30%] sm:h-[100px] aspect-[4/3] bg-black rounded-xl bg-center bg-no-repeat bg-contain"></div>
                <div className="overflow-auto w-[50%] flex flex-col">
                    <div dangerouslySetInnerHTML={{__html:prop.option.option}} className="font-semibold text-lg mb-2"></div>
                    {button}
                </div>
                <div onClick={() => { prop.delete(prop.option, prop.index) }} className="self-center ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition-all" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </div>
            </div>
        </>
    )
}

function TypeAnswerOption(prop) {
    return (
        <>
            <div className="font-bold text-white text-xl">ANSWER</div>
            <textarea onChange={(current) => { prop.setAnswer(current.target.value) }} className="w-full min-h-40 rounded-lg p-4 ps-6 outline-none">{prop.answer}</textarea>
        </>
    )
}

function EditQuestion({ openFunction, question, render, questionsList, questionNumber }) {
    const [editor] = useState(() => withReact(withHistory(createEditor())));
    const [isStyleMarkActive, setIsStyleMarkActive] = useState({ bold: false, italic: false, underline: false })
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: question.question }],
        },
    ])

    function isMarkActive(editor, format) {
        const marks = Editor.marks(editor)
        return marks ? marks[format] === true : false
    }

    function toggleMark(format) {
        const isActive = isMarkActive(editor, format)
        if (isActive) {
            Editor.removeMark(editor, format)
        } else {
            Editor.addMark(editor, format, true)
        }
    }

    function hotKeys(event) {
        if (event.key === 'b' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault()
            toggleMark('bold')
            setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
        }
        if (event.key === 'i' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault()
            toggleMark('italic')
            setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
        }
        if (event.key === 'u' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault()
            toggleMark('underline')
            setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
        }
        if (event.key === ' ' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault()
            offAllMarks(editor)
            setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
        }
    }

    function offAllMarks(editor) {
        Editor.removeMark(editor, 'bold')
        Editor.removeMark(editor, 'italic')
        Editor.removeMark(editor, 'underline')
    }

    const deserializeParagraph = (element) => {
        const children = Array.from(element.childNodes).map((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                return { text: node.textContent }; // Plain text node
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively process child nodes
                const childText = node.textContent || "";

                // Check for styling and set appropriate flags
                const bold = node.tagName === "STRONG" || node.style.fontWeight === "bold";
                const italic = node.tagName === "EM" || node.style.fontStyle === "italic";
                const underline = node.tagName === "U" || node.style.textDecoration.includes("underline");

                // Combine styles if the element contains nested styles (e.g., <strong><u>text</u></strong>)
                const nestedStyles = deserializeParagraph(node); // Recursive call for nested styles
                const combinedChildren = nestedStyles.children.map((child) => ({
                    ...child,
                    bold: bold || child.bold,
                    italic: italic || child.italic,
                    underline: underline || child.underline,
                }));

                return combinedChildren.length > 0
                    ? combinedChildren[0]
                    : { text: childText, bold, italic, underline };
            }
            return null; // Ignore unsupported nodes
        });

        return { type: "paragraph", children: children.flat().filter(Boolean) };
    };


    // Deserialize entire HTML string into Slate value
    const deserializeHTML = (html) => {
        const container = document.createElement("div");
        container.innerHTML = html; // Parse HTML into DOM

        return Array.from(container.childNodes)
            .filter((node) => node.nodeName === "P") // Only handle <p> elements
            .map((paragraphNode) => deserializeParagraph(paragraphNode));
    };
    function serializeParagraph(paragraph) {
        return paragraph.children.map((child) => {
            if (Text.isText(child)) {
                let text = child.text
                if (child.bold) {
                    text = `<strong>${text}</strong>`
                }
                if (child.italic) {
                    text = `<em>${text}</em>`
                }
                if (child.underline) {
                    text = `<u>${text}</u>`
                }
                return text
            }
            return ''
        }).join('')
    }

    function serializeToHTML(value) {
        return value.map((node) => {
            if (node.type === 'paragraph') {
                return `<p>${serializeParagraph(node)}</p>`
            }
            return ''
        }).join('\n')
    }
    const initialValue = deserializeHTML(question.question)
    const [displayAnswer, setDisplayAnswer] = useState(true)
    //display correc or wrong for multiple choice option
    const [typeAnswer, setTypeAnswer] = useState(question.type == "TA" ? true : false)
    //check if currently typing answer
    const [options, setOptions] = useState(question.options)
    //options for multiple choice
    const [answer, setAnswer] = useState(question.options[0].option)
    //answer for typing answer question
    let [questionTitle, setQuestionTitle] = useState(question.question)
    let optionName
    let [correctOptions, setCorrectOptions] = useState(question.answers)
    const [addImage, setAddImage] = useState(false)
    const [image, setImage] = useState(question.image)

    function saveQuestion() {
        let questionTitle = serializeToHTML(value)
        let newQuestionsList = [...questionsList]
        if (typeAnswer) {
            var newQuestion =
            {
                id: question.id,
                question: questionTitle,
                type: "TA",
                image: image,
                setId: question.setId,
                options: [
                    {
                        option: answer,
                        id: options[0].id,
                        image: null
                    }
                ],
                answers: []
            }
            newQuestionsList.forEach((question, index) => {
                if (question.id === newQuestion.id) {
                    newQuestionsList[index] = newQuestion
                }
            })
        }
        else {
            if (options.length < 2) {
                alert("Multiple choice need at least 2 options")
                return false
            }
            if (correctOptions.length === 0) {
                alert("Multiple choice need at least 1 correct option")
                return false
            }
            options.forEach((option, index) => {
                if (option.original == false) {
                    delete options[index].id
                    delete options[index].original
                }
            })
            console.log(options)
            var newQuestion =
            {
                id: question.id,
                question: questionTitle,
                type: "MCQ",
                image: image,
                setId: question.setId,
                options: options,
                answers: correctOptions
            }
            newQuestionsList.forEach((question, index) => {
                if (question.id === newQuestion.id) {
                    newQuestionsList[index] = newQuestion
                }
            })
        }
        console.log(newQuestion)
        axios.patch(`http://localhost:8080/api/v1/${question.setId}/question`, newQuestion, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        }).then((response) => {
            console.log(response)
            openFunction(false)
            render()
        })
    }
    function addOption() {
        if (optionName.value == '') return false
        if (displayAnswer) {
            setCorrectOptions([...correctOptions, options.length + 1])
        }
        setOptions([...options, {
            original: false,
            id: options.length + 1,
            option: optionName.value,
            image: ""
        }])
        optionName.value = ''
    }
    function deleteOption(deleteOption, index) {
        if (options.length === 1) {
            alert("Multiple choice questions must have at least one option");
            return;
        }

        // Update `options` and `correctOptions`
        setCorrectOptions((prevCorrectOptions) =>
            prevCorrectOptions
                .filter((idx) => idx !== index) // Remove the deleted option's index
                .map((idx) => (idx > index ? idx - 1 : idx)) // Shift remaining indices
        );
        const updatedOptions = options.filter((_, idx) => idx !== index - 1);
        setOptions(updatedOptions);

    }
    // function changeType() {
    //     setTypeAnswer(!typeAnswer)
    // }

    if (typeAnswer) {
        return (
            <>
                <Modal
                    isOpen={addImage}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: '#fff',
                            zIndex: 100
                        },
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            border: 'none',
                            background: 'none',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '0'
                        }
                    }}
                >
                    <AddImage addButton={setAddImage} imageContainer={setImage} />
                </Modal>
                <div className="flex min-h-screen flex-col w-full bg-[#338ACB] border-slate-500 rounded-lg lg:px-7 lg:w-4/5">
                    <div className="flex gap-4 items-center justify-between rounded-md my-4 p-5 md:p-10 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
                        <div className="flex gap-2 bg-[#BFF4FF] p-2 sm:p-4 rounded-lg">
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><b>B</b></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><i>I</i></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><u>U</u></button>
                            <button className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => { openFunction(false) }} className="px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            {/* <select onChange={changeType} className="bg-[#FF6663] px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select> */}
                            <button onClick={saveQuestion} className="bg-[#FF6663] px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">SAVE</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="bg-black rounded-lg bg-contain bg-no-repeat bg-center max-h-20"></div>
                        <div className="w-full bg-[#e7e2e2] rounded-lg p-2 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question {questionNumber+1}:</div>
                            <div className="flex-grow whitespace-normal break-words ps-4 p-2 bg-transparent outline-none group-hover w-full focus:outline-none outline-none border-none">
                                <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
                                    <Editable className="focus:outline-none outline-none border-none" onKeyDown={hotKeys}
                                        placeholder="Input question here"
                                        renderLeaf={props => <Leaf {...props} />}
                                    />
                                </Slate>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 sm:mx-10 overflow-y-auto">
                        <TypeAnswerOption answer={answer} setAnswer={setAnswer} />
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <Modal
                    isOpen={addImage}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: '#fff',
                            zIndex: 100
                        },
                        content: {
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            border: 'none',
                            background: 'none',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '0'
                        }
                    }}
                >
                    <AddImage addButton={setAddImage} imageContainer={setImage} />
                </Modal>
                {console.log(correctOptions)}
                <div className="flex min-h-screen flex-col w-full bg-[#338ACB] border-slate-500 rounded-lg lg:px-7 lg:w-4/5">
                    <div className="flex items-center gap-4 justify-between rounded-md my-4 p-5 md:p-10 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
                        <div className="flex gap-2 bg-[#BFF4FF] p-2 sm:p-4 rounded-lg">
                            <button onMouseDown={(e) => {
                                e.preventDefault();
                                toggleMark('bold');
                                setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                            }}
                                className={`hover:bg-gray-400 ${isStyleMarkActive.bold ? "bg-gray-400" : ''} hover:scale-110 transition-all h-8 w-8 rounded-lg`}><b>B</b></button>
                            <button onMouseDown={(e) => {
                                e.preventDefault();
                                toggleMark('italic')
                                setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                            }}
                                className={`hover:bg-gray-400 ${isStyleMarkActive.italic ? "bg-gray-400" : ""} hover:scale-110 transition-all h-8 w-8 rounded-lg`}><i>I</i></button>
                            <button onMouseDown={(e) => {
                                e.preventDefault();
                                toggleMark('underline')
                                setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                            }} className={`hover:bg-gray-400 ${isStyleMarkActive.underline ? "bg-gray-400" : ''} hover:scale-110 transition-all h-8 w-8 rounded-lg`}><u>U</u></button>
                            <button className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                            <button type="button" onClick={addOption} className="ml-auto rounded-lg bg-[#B9E42A] h-8 w-8 hover:scale-105 transition-all">+</button>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => { openFunction(false) }} className="px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            {/* <select onChange={changeType} className="bg-[#FF6663] px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select> */}
                            <button onClick={saveQuestion} className="bg-[#FF6663] px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">SAVE</button>
                        </div>
                    </div>

                    <div className="flex justify-center mb-6 mx-2 gap-2">
                        <input ref={(current) => (optionName = current)} onKeyDown={(e) => { if (e.key == 'Enter') addOption() }} name="option" type="text" placeholder="Input option here" className="block outline-none w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" />
                        <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} />
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="bg-black rounded-lg bg-contain bg-no-repeat bg-center max-h-20"></div>
                        <div className="w-full bg-[#e7e2e2] rounded-lg p-2 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question {questionNumber+1}:</div>
                            <div className="flex-grow whitespace-normal break-words ps-4 p-2 bg-transparent outline-none group-hover w-full focus:outline-none outline-none border-none">
                                <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
                                    <Editable className="focus:outline-none outline-none border-none" onKeyDown={hotKeys}
                                        placeholder="Input question here"
                                        renderLeaf={props => <Leaf {...props} />}
                                    />
                                </Slate>
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 sm:mx-10 overflow-y-auto min-sm:border-t min-sm:   border-black">
                        {options.map((option, index) => {
                            return <MultiChoiceOption key={option.id} index={index + 1} delete={deleteOption} option={option} options={options} setOptions={setOptions} correctOptions={correctOptions} setCorrectOptions={setCorrectOptions} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default EditQuestion