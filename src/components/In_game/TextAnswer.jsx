import QuestionDisplay from './QuestionDisplay';
import InGameTopBar from './GameTopBar';

function TextAnswer({question, player,roomId,stompClient}) {
    return(
        <>
        <div className="w-full h-[100vh] overflow-hidden">
            <InGameTopBar player={player} roomId={roomId} />
            <QuestionDisplay text={question.question}/>
            <div className="flex w-full h-full justify-center bg-gradient-to-br from-white to-[#5899E2] md:pt-20 pt-10">
                <textarea className='w-5/6 md:h-[25vh] h-[26vh] bg-blue-950 caret-white p-2 px-6 text-white rounded-3xl text-wrap text-lg resize-none' type='text' placeholder='Answer...'></textarea>
                <button className='group w-[7vh] md:h-[25vh] h-[26vh] bg-sky-200 flex items-center rounded-full active:border-teal-800 active:bg-green-300 active:text-green-900 md:hover:border-4 md:hover:scale-90 transition ease-out duration-100'>
                    <span className='text-3xl pt-10 font-bold rotate-90 md:group-active:text-4xl md:group-active:-translate-x-3' onClick={()=>{
                        const answerDTO = {
                            player: encodeURIComponent(player.name),
                            questionId: question.id,
                            answer: document.querySelector('textarea').value,
                            roomId: roomId
                        }
                        console.log(answerDTO);
                        stompClient.publish({ destination: '/quizz/player/answer', body: JSON.stringify(answerDTO) });
                    }}>Submit</span>
                </button>
            </div>
        </div>
        </>
    )
}
export default TextAnswer;