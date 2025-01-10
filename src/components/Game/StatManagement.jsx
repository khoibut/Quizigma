function Player( player ) {
    function getTime(time) {
        const date = new Date(null);
        date.setSeconds(time); // specify value for SECONDS here
        return date.toISOString().slice(11, 19);
    }

    return(
        <>
            <div className="w-full bg-white flex gap-2 sm:justify-between p-4 sm:px-10 sm:py-6 rounded-full font-extrabold">
                <div>
                    <span>{player.rank}. </span>
                    <span>{player.name}</span>
                </div>
                <div>
                    <span className="mx-2 sm:mx-10">
                        {getTime(player.time)}
                    </span>
                    <span className="bg-rose-700 p-2 text-white rounded-md">{player.correct}/{player.total}</span>
                </div>
            </div>
        </>
    )
}
function StatManagement( {totalQuestion} ) {
    return (
        <>
            <div className="bg-green-500 w-full h-[10vh]"></div>
            <div className="p-1">
                <div>
                    <div className="flex items-center gap-4 sm:gap-8 bg-[#3272E8] rounded-lg min-h-fit h-[18vh] p-2 sm:p-5">
                        <div className="md:h-full aspect-square bg-black rounded-md">IMAGE</div>
                        <div>
                            <div className="font-bold text-xl text-white">Title</div>
                            <div className="text-md text-white">Questions: 10</div>
                            <div className="text-md text-white">Author</div>
                        </div>
                        <button className="px-5 sm:px-10 py-2 rounded-full font-bold bg-red-400 text-white ml-auto hover:bg-rose-500 hover:scale-105 transition-all">START</button>
                    </div>
                </div>
                <div className="flex max-md:flex-col-reverse w-full gap-2 mt-2 h-[68vh]">
                    <div className="bg-[#F8858B] md:w-4/5 rounded-lg p-2 sm:p-5 flex flex-col gap-5 overflow-auto">
                        <Player name="Player 1" rank="1" time="12300" correct="9" total={totalQuestion} />
                        <Player name="Player 5" rank="2" time="100000" correct="7" total={totalQuestion} />
                        <Player name="Player 3" rank="3" time="76300" correct="6" total={totalQuestion} />
                        <Player name="Player 7" rank="4" time="1906" correct="5" total={totalQuestion} />
                        <Player name="Player 2" rank="5" time="12093" correct="4" total={totalQuestion} />
                        <Player name="Player 6" rank="6" time="123456789" correct="3" total={totalQuestion} />
                        <Player name="Player 4" rank="7" time="89034590" correct="1" total={totalQuestion} />
                    </div>
                    <div className="bg-[#F8858B] flex justify-center items-center max-md:h-[25vh] md:w-1/5 md:grid md:grid-rows-3 md:grid-cols-1 md:justify-items-center py-4 gap-2 rounded-lg">
                        <div className="bg-white rounded-full max-sm:min-w-[80px] max-sm:w-[20%] text-nowrap overflow-hidden sm:h-full aspect-square">Average stuff like average correct </div>
                        <div className="bg-white rounded-full max-sm:min-w-[80px] max-sm:w-[20%] text-nowrap overflow-hidden sm:h-full aspect-square">Question answer right</div>
                        <div className="bg-white rounded-full max-sm:min-w-[80px] max-sm:w-[20%] text-nowrap overflow-hidden sm:h-full aspect-square">Question most wrong</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StatManagement