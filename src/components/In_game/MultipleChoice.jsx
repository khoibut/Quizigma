import QuestionDisplay from './QuestionDisplay';
import InGameTopBar from './GameTopBar';
import AnswerDeck from './AnswerDeck';
import CorrectScreen from './CorrectScreen';
function MultipleChoice({question, player, roomId, stompClient}) {
    return(
        <>
            <div className="w-full h-screen overflow-hidden">
                <InGameTopBar player={player} roomId={roomId}/>

                <QuestionDisplay text={question.question} />

                <AnswerDeck player={player} question={question} roomId={roomId} stompClient={stompClient}/>
            </div>
        </>
    )
}

export default MultipleChoice;