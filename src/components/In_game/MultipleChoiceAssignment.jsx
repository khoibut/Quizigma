import QuestionDisplay from './QuestionDisplay';
import InGameTopBar from './GameTopBar';
import AnswerDeck from './AnswerDeck';
function MultipleChoiceAssignment({question, player, roomId, stompClient}) {
    return(
        <>
            <div className="w-full h-screen overflow-hidden">
                <InGameTopBar player={player} roomId={roomId} stompClient={stompClient}/>

                <QuestionDisplay question={question} />

                <AnswerDeck player={player} question={question} roomId={roomId} stompClient={stompClient}/>
            </div>
        </>
    )
}

export default MultipleChoiceAssignment;