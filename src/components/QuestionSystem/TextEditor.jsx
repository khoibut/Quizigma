import { useState } from "react";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { withHistory } from "slate-history";
import { createEditor } from "slate";
import MathEquationDisplay from "./MathEquationDisplay";
const MathElement = ({ attributes, children, element }) => {
    return (
        <span {...attributes} contentEditable={false} style={{ display: "inline-block" }}>
            <StaticMathField>{element.value}</StaticMathField>
            {children}
        </span>
    );
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
function TextEditor({ initialValue, setValue, isMathOpen, setIsMathOpen, isStyleMarkActive, setIsStyleMarkActive }) {
    const [editor] = useState(() => {
        const e = withReact(withHistory(createEditor()));
        const { isInline } = e;
        const { isVoid } = e;
        e.isVoid = (element) => {
            return element.type === "math" ? true : isVoid(element);
        }
        e.isInline = (element) => {
            return element.type === "math" ? true : isInline(element);
        };
        return e;
    });
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
            value: latex,
            children: [{ text: '' }]
        }
        Transforms.insertNodes(editor, newNode)
    };
    const renderElement = (props) => {
        switch (props.element.type) {
            case 'math':
                return <MathElement {...props} />
            default:
                return <p {...props.attributes}>{props.children}</p>
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

    return (
        <>
            <MathEquationDisplay insertMath={insertMath} isMathOpen={isMathOpen} setIsMathOpen={setIsMathOpen} />
            <Slate editor={editor} initialValue={initialValue} onChange={newValue => setValue(newValue)}>
                <Editable
                    className="focus:outline-none outline-none border-none"
                    onKeyDown={hotKeys}
                    placeholder="Input question here"
                    renderElement={renderElement}
                    renderLeaf={props => <Leaf {...props} />}
                />
            </Slate>
        </>
    )
}
export default TextEditor