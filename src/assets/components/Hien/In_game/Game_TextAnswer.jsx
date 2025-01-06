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
                <button className='group w-[7vh] md:h-[22vh] h-[16vh] bg-sky-200 flex items-center rounded-full active:border-teal-800 active:bg-green-300 active:text-green-900 border-4 hover:scale-90 transition ease-out duration-100'>
                    <span className='md:text-3xl text-xl md:pt-10 font-bold rotate-90 group-active:md:text-4xl'>Submit</span>
                </button>
            </div>
        </div>
        </>
    )
}
export default Game_TextAnswer;