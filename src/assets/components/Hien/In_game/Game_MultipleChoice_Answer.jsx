import QuestionDisplay from './In_Game_Question_Display';
import InGameTopBar from './In_Game_Top_Bar';
import AnswerDeck from './Answer_Deck';

function Game_MultipleChoice_Answer(){
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

export default Game_MultipleChoice_Answer;