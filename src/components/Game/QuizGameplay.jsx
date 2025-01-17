import MultipleChoice from "../In_game/MultipleChoice"
import TextAnswer from "../In_game/TextAnswer"
import CorrectScreen from "../In_game/CorrectScreen"
import WrongScreen from "../In_game/WrongScreen"
import { useEffect, useState } from "react"
function QuizGameplay({ question, roomId, player, stompClient }) {
    const [view, setView] = useState('')
    function getQuestionType() {
        if (question.type === 'MCQ') {
            setView('multipleChoice')
        }
        if (question.type === 'TA') {
            setView('textAnswer')
        }
    }
    useEffect(() => {
        getQuestionType()
    })
    function renderView() {
        if(view==='multipleChoice'){
            return <MultipleChoice question={question} player={player} roomId={roomId} stompClient={stompClient}/>
        }
        if(view==='textAnswer'){
            return <TextAnswer question={question} player={player} roomId={roomId} stompClient={stompClient}/>
        }
    }
    return (
        <>
            {console.log(question)}
            {renderView()}
        </>
    )
}
export default QuizGameplay;