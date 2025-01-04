import QuestionDisplay from './In_Game_Question_Display';
import InGameTopBar from './In_Game_Top_Bar';

function Game_TextAnswer(){
    return(
        <>
        <div className="w-full h-screen overflow-hidden">
            <InGameTopBar />
            <QuestionDisplay />
            <div className="flex w-full h-full justify-center md:pt-10 pt-5">
                <textarea className='w-5/6 md:h-[22vh] h-[16vh] bg-blue-950 caret-white p-2 px-6 text-white rounded-3xl text-wrap text-lg resize-none' type='text' placeholder='Answer...'></textarea>
            </div>
        </div>
        </>
    )
}
export default Game_TextAnswer;