import { useEffect, useState } from "react"

function Player({ name, total, rank, correct, score }) {
    return (
        <>
            <div className="w-full bg-white flex gap-2 sm:justify-between p-4 sm:px-10 sm:py-6 rounded-full font-extrabold">
                <div>
                    <span>{rank}. </span>
                    <span>{name}</span>
                </div>
                <div>
                    <span className="mx-2 sm:mx-10">
                        {score}
                    </span>
                    <span className="bg-rose-700 p-2 text-white rounded-md">{correct}/{total}</span>
                </div>
            </div>
        </>
    )
}
function HostGameStat({ players, roomId, stompClient }) {
    const [sortedPlayers, setSortedPlayers] = useState([])
    function endGame() {
        console.log("Ending game")
        stompClient.publish({ destination: '/quizz/creator/end', body: JSON.stringify({room:roomId}) })
    }
    useEffect(() => {
        const sorted = [...players].sort((a, b) => b.score - a.score)
        setSortedPlayers(sorted)
    },[players])
    return (
        <>
            <div className="p-1">
                <div>
                    <div className="flex items-center gap-4 sm:gap-8 bg-[#3272E8] rounded-lg min-h-fit h-[18vh] p-2 sm:p-5">
                        <div>
                            <div className="text-md text-white">{"#" + roomId}</div>
                        </div>
                        <button onClick={endGame} className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white ml-auto hover:bg-rose-500 hover:scale-105 transition-all">END</button>
                    </div>
                </div>
                <div className="flex max-md:flex-col-reverse w-full gap-2 mt-2 h-[100%]">
                    <div className="bg-[#F8858B] md:w-4/5 rounded-lg p-2 sm:p-5 flex flex-col gap-5 overflow-auto">
                        {sortedPlayers.map((player,index) => {
                            return <Player name={player.name} rank={index+1} score={player.score} correct={player.correct} total={player.correct+player.incorrect} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HostGameStat