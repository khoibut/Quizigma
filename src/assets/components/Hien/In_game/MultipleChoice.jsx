import QuestionDisplay from './QuestionDisplay';
import InGameTopBar from './GameTopBar';
import AnswerDeck from './AnswerDeck';

function MultipleChoice(){
    return(
        <>
            <div className="w-full h-screen overflow-hidden">
                <InGameTopBar/>

                <QuestionDisplay />

                <AnswerDeck />
            </div>
        </>
    )
}

export default MultipleChoice;