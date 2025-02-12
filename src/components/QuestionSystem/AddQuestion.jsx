import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import AddImage from "../PopUp/AddImage";
import Modal from "react-modal";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { createEditor, Editor, Transforms, Text, Range, Point } from "slate";
import { withHistory } from "slate-history";
import { EditableMathField, StaticMathField } from "react-mathquill";
import { addStyles } from "react-mathquill";
import MathEquationDisplay from "./MathEquationDisplay";
addStyles();
function OptionStatus({ status, changeStatus, correctOptions, setCorrectOptions, optionId }) {
    if (status) {
        return <button type="button" onClick={() => { changeStatus(false); setCorrectOptions(correctOptions => correctOptions.filter(option => option != optionId)) }} className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold w-fit">Correct</button>
    }
    else {
        return <button type="button" onClick={() => { changeStatus(true); setCorrectOptions([...correctOptions, optionId]) }} className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold w-fit">Incorrect</button>
    }
}

function MultiChoiceOption(prop) {
    const [displayAnswer, setDisplayAnswer] = useState(prop.correctOptions.includes(prop.optionsList.indexOf(prop.option)))
    const [addImage, setAddImage] = useState(false)
    const [image, setImage] = useState(null)
    function addImageToOption(base64Image) {
        prop.option.image = base64Image
        prop.optionsList[prop.optionsList.indexOf(prop.option)] = prop.option
        prop.setOptions(prop.optionsList)
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
                <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="max-sm:max-w-[100px] max-sm:w-[30%] sm:h-[100px] aspect-[4/3] bg-black rounded-xl bg-center bg-contain bg-no-repeat"></div>
                <div className="overflow-auto w-[50%] flex flex-col">
                    <div className="font-semibold text-lg mb-2">{prop.option.option}</div>
                    <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} correctOptions={prop.correctOptions} optionId={prop.optionsList.indexOf(prop.option)} setCorrectOptions={prop.setCorrectOptions} />
                </div>
                <div onClick={() => { prop.delete(prop.optionsList.indexOf(prop.option)) }} className="self-center ml-auto">
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
const withMath = (editor) => {
    const { deleteBackward } = editor;

    editor.deleteBackward = (unit) => {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
            // Look for the closest math block at or before the cursor
            const [match] = Editor.nodes(editor, {
                match: (n) => n.type === 'math', // Match only 'math' type nodes
                mode: 'highest', // Get the highest (closest) match
            });

            if (match) {
                const [, path] = match;
                const pointBefore = Editor.before(editor, selection.anchor, { unit: 'character' });

                // Check if the cursor is at the very end of the math node
                const pointAfter = Editor.after(editor, selection.anchor, { unit: 'character' });

                // If the cursor is just after the math block (inside the next node or at the boundary)
                if (pointAfter && Point.equals(pointBefore, pointAfter)) {
                    // Remove the entire math node
                    Transforms.removeNodes(editor, { at: path });
                    return;
                }
            }
        }

        // Fallback to default behavior if no match or cursor is not at the end of the math node
        deleteBackward(unit);
    };

    return editor;
};
const MathElement = ({ attributes, children, element }) => {
    return (
        <span {...attributes}>
            <StaticMathField>{element.children[0].text}</StaticMathField>
        </span>
    )
};
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
const withInlineMath = (editor) => {
    const { isInline } = editor;

    editor.isInline = (element) => {
        return element.type === "math" ? true : isInline(element);
    };

    return editor;
};
function AddQuestion({ openFunction, quiz, render }) {
    const baseUrl = import.meta.env.VITE_API_URL
    const [isMathOpen, setIsMathOpen] = useState(false)
    const [editor] = useState(() => withReact(withHistory(createEditor())));
    const [isStyleMarkActive, setIsStyleMarkActive] = useState({ bold: false, italic: false, underline: false })
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'Type something here...' }],
        },
    ]);

    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: '' }],
        },
    ]
    function isMarkActive(editor, format) {
        const marks = Editor.marks(editor)
        return marks ? marks[format] === true : false
    }
    function offAllMarks(editor) {
        Editor.removeMark(editor, 'bold')
        Editor.removeMark(editor, 'italic')
        Editor.removeMark(editor, 'underline')
    }

    function toggleMark(format) {
        const isActive = isMarkActive(editor, format)
        if (isActive) {
            Editor.removeMark(editor, format)
        } else {
            Editor.addMark(editor, format, true)
        }
    }
    const insertMath = (latex) => {
        const newNode = {
            type: 'math',
            children: [{ text: latex }]
        }
        Transforms.insertNodes(editor, newNode)
    };
    const renderElement = (props) => {
        switch (props.element.type) {
            case 'math':
                return <MathElement {...props} />
            default:
                return <p className="inline" {...props.attributes}>{props.children}</p>
        }
    }
    function hotKeys(e) {
        if (e.ctrlKey) {
            switch (e.key) {
                case 'b': {
                    e.preventDefault()
                    toggleMark('bold')
                    setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                    break
                }
                case 'i': {
                    e.preventDefault()
                    toggleMark('italic')
                    setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                    break
                }
                case 'u': {
                    e.preventDefault()
                    toggleMark('underline')
                    setIsStyleMarkActive({ bold: isMarkActive(editor, 'bold'), italic: isMarkActive(editor, 'italic'), underline: isMarkActive(editor, 'underline') })
                    break
                }
                case ' ': {
                    e.preventDefault()
                    setIsStyleMarkActive({ bold: false, italic: false, underline: false })
                    offAllMarks(editor)
                    break
                }
            }
        }
    }

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
            }else if (node.type === 'math') {
                return `<StaticMathField>${node.children[0].text}</StaticMathField>`
            }
            return ''
        }).join('\n')
    }
    const setId = useParams().setId
    const [displayAnswer, setDisplayAnswer] = useState(true)
    //display correc or wrong for multiple choice option
    const [typeAnswer, setTypeAnswer] = useState(false)
    //check if currently typing answer
    const [options, setOptions] = useState([])
    //options for multiple choice
    const [answer, setAnswer] = useState("")

    const [addImage, setAddImage] = useState(false)
    const [image, setImage] = useState(null)
    let optionName
    const [correctOptions, setCorrectOptions] = useState([])

    function addQuestion() {
        let question
        offAllMarks(editor)
        let questionTitle = serializeToHTML(value)
        if (questionTitle === '') {
            alert("Question title can't be empty")
            return false
        }
        if (typeAnswer) {
            question = {
                question: questionTitle,
                type: "TA",
                image: image,
                options: [
                    {
                        option: answer,
                        image: null
                    }
                ],
                answers: []
            }
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
            console.log(questionTitle)
            let answers = []
            correctOptions.forEach((option) => {
                answers.push(option + 1)
            })
            options.forEach((option) => {
                delete option.id
            })
            question = {
                question: questionTitle,
                type: "MCQ",
                image: image,
                options: options,
                answers: answers
            }
        }
        console.log(question)
        axios.post(`${baseUrl}/api/v1/${setId}/question`, question, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } }).then((res) => {
            render()
            openFunction(false)
        })
    }
    function addOption() {
        if (optionName.value == '') return false
        if (displayAnswer) {
            setCorrectOptions([...correctOptions, options.length])
        }
        setOptions([...options, {
            id: options.length + 1,
            option: optionName.value,
            image: null
        }])
        optionName.value = ''
    }
    function changeType() {
        setTypeAnswer(!typeAnswer)
    }
    function deleteOption(id) {
        const newOptions = options.filter(option => options.indexOf(option) !== id)
        const newCorrectOptions = correctOptions.filter(option => option !== id)
        const adjustedCorrectOptions = newCorrectOptions.map(option => option > id ? option - 1 : option)
        setCorrectOptions(adjustedCorrectOptions)
        setOptions(newOptions)
        // alert(id)
        // setCorrectOptions(correctOptions => correctOptions.filter(option => option != id))
        // setCorrectOptions(correctOptions => correctOptions.map(option => option > id ? option - 1 : option))
        // setOptions(options => options.filter(option => option != options[id]))
        // console.log(options)
        // console.log(correctOptions)
    }

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
                    <div className="flex items-center justify-between gap-4 rounded-md my-4 p-2 sm:p-6 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
                        <div className="flex gap-2 bg-[#BFF4FF] p-2 sm:p-4 rounded-lg">
                            <button onClick={(e) => {
                                e.preventDefault()
                                toggleMark('bold')
                                setIsStyleMarkActive({ bold: !isStyleMarkActive.bold, italic: false, underline: false })
                            }}
                                className={`{${isStyleMarkActive.bold ? 'bg-gray-400' : ''}} hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg`}><b>B</b></button>
                            <button onClick={(e) => {
                                e.preventDefault()
                                toggleMark('italic')
                                setIsStyleMarkActive({ bold: false, italic: !isStyleMarkActive.italic, underline: false })
                            }}
                                className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><i>I</i></button>
                            <button onClick={(e) => {
                                e.preventDefault()
                                toggleMark('underline')
                                setIsStyleMarkActive({ bold: false, italic: false, underline: !isStyleMarkActive.underline })
                            }}
                                className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><u>U</u></button>
                            <button className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                        </div>
                        <div className="flex gap-2 sm:gap-4 flex-wrap">
                            <button onClick={() => { openFunction(false) }} className="px-3 sm:px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            <select onChange={changeType} className="bg-[#FF6663] px-3 sm:px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select>
                            <button onClick={addQuestion} className="bg-[#FF6663] px-3 sm:px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">ADD</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="h- full bg-black rounded-lg bg-center bg-no-repeat bg-contain max-h-20"></div>
                        <div className="w-full break-words overflow-auto bg-[#e7e2e2] rounded-lg p-4 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question {quiz.questions.length + 1}:</div>
                            <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
                                <Editable
                                    className="focus:outline-none outline-none border-none"
                                    onKeyDown={hotKeys}
                                    placeholder="Input question here"
                                    renderElement={renderElement}
                                    renderLeaf={props => <Leaf {...props} />}
                                />
                            </Slate>
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
                {console.log(value)}
                <MathEquationDisplay insertMath={insertMath} isMathOpen={isMathOpen} setIsMathOpen={setIsMathOpen} />
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
                    <div className="flex items-center justify-between gap-4 rounded-md my-4 p-2 sm:p-6 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
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
                            <button onClick={() => {
                                setIsMathOpen(true)
                            }} className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                            <button type="button" onClick={addOption} className="ml-auto rounded-lg bg-[#B9E42A] h-8 w-8 hover:scale-105 transition-all">+</button>
                        </div>
                        <div className="flex gap-2 sm:gap-4 flex-wrap">
                            <button onClick={() => { openFunction(false) }} className="px-3 sm:px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            <select onChange={changeType} className="bg-[#FF6663] px-3 sm:px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select>
                            <button onClick={addQuestion} className="bg-[#FF6663] px-3 sm:px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">ADD</button>
                        </div>
                    </div>

                    <div className="flex justify-center mb-6 mx-2 gap-2">
                        <input ref={(current) => (optionName = current)} onKeyDown={(e) => { if (e.key == 'Enter') addOption() }} name="option" type="text" placeholder="Input option here" className="block outline-none w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" />
                        <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} />
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div onClick={() => { setAddImage(true) }} style={{ backgroundImage: `url(${image})` }} className="bg-black rounded-lg bg-contain bg-no-repeat bg-center max-h-20"></div>
                        <div className="w-full bg-[#e7e2e2] rounded-lg p-2 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question {quiz.questions.length + 1}:</div>
                            <div className="flex-grow whitespace-normal break-words ps-4 p-2 bg-transparent outline-none group-hover w-full focus:outline-none outline-none border-none">
                                <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
                                    <Editable className="focus:outline-none outline-none border-none" onKeyDown={hotKeys}
                                        placeholder="Input question here"
                                        renderElement={renderElement}
                                        renderLeaf={props => <Leaf {...props} />}
                                    />
                                </Slate>
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 sm:mx-10 overflow-y-auto min-sm:border-t min-sm:   border-black">
                        {options.map(option => {
                            return <MultiChoiceOption setOptions={setOptions} key={option.id} delete={deleteOption} option={option} optionsList={options} correctOptions={correctOptions} setCorrectOptions={setCorrectOptions} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default AddQuestion