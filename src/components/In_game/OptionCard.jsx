
function OptionCard({player, roomId, question, option, color, index, stompClient }) {
    function image(){
        if(option.image){
            return (<img src={option.image} alt="Option" className="w-full h-1/2 rounded-3xl" />)
        }else{
            return <></>
        }
    }
    return (
        <>
            <div className={`p-2 pt-1 flex flex-col snap-center rounded-3xl md:h-[43vh] h-[38vh] md:w-[38vh] min-w-[30vh] cursor-pointer md:hover:animate-rgbBorder md:hover:border-2`} style={{ backgroundColor: color }}
                onClick={() => {
                    const answerDTO = {
                        player: encodeURIComponent(player.name),
                        questionId: question.id,
                        answer: option.originalIndex,
                        roomId: roomId
                    }
                    stompClient.publish({ destination: '/quizz/player/answer', body: JSON.stringify(answerDTO) });
                }}
            >
                <div className="bg-white w-1/4 md:h-7 self-end flex flex-col rounded-2xl mb-2">
                    <span className="self-center md:text-2xl text-2sm">{"#" + index}</span>
                </div>
                <div className="w-full h-full overflow-y-auto rounded-3xl p-1">
                    {image()}
                    <span dangerouslySetInnerHTML={{__html:option.option}} className="md:text-xl text-2sm text-white"></span>
                </div>
            </div>
        </>
    )
}

export default OptionCard;