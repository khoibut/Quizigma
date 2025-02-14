import parse from "html-react-parser/lib/index"
import { StaticMathField } from "react-mathquill"

function displayQuestion(question) {
    const elements = parse(question, {
        replace: (domNode) => {
            if (domNode.name === 'staticmathfield') {
                return <StaticMathField>{domNode.children[0].data}</StaticMathField>
            }
        }
    })
    return elements
}
export default displayQuestion