function Player( player ) {
    function getTime(time) {
        const date = new Date(null);
        date.setSeconds(time); // specify value for SECONDS here
        return date.toISOString().slice(11, 19);
    }

    return(
        <>
            <div class="w-full bg-white flex justify-between px-10 py-6 rounded-full font-extrabold">
                <div>
                    <span>{player.rank}. </span>
                    <span>{player.name}</span>
                </div>
                <div>
                    <span class="mx-10">
                        {getTime(player.time)}
                    </span>
                    <span class="bg-rose-700 p-2 text-white rounded-md">{player.correct}/{player.total}</span>
                </div>
            </div>
        </>
    )
}
function StatManagement( {totalQuestion} ) {
    return (
        <>
            <div class="bg-green-500 w-full h-[10vh]"></div>
            <div class="p-5">
                <div>
                    <div class="flex items-center gap-8 bg-[#3272E8] rounded-lg h-[18vh] p-5">
                        <div class="h-full aspect-square bg-black rounded-md">IMAGE</div>
                        <div>
                            <div class="font-bold text-xl text-white">Title</div>
                            <div class="text-md text-white">Questions: [amount of question]</div>
                            <div class="text-md text-white">Author</div>
                        </div>
                        <button class="px-10 py-2 rounded-full font-bold bg-red-400 text-white ml-auto hover:bg-rose-500 hover:scale-105 transition-all">START</button>
                    </div>
                </div>
                <div class="flex gap-5 mt-3 h-[65vh]">
                    <div class="bg-[#F8858B] w-4/5 rounded-lg p-5 flex flex-col gap-5 overflow-auto">
                        <Player name="Player 1" rank="1" time="12300" correct="9" total={totalQuestion} />
                        <Player name="Player 5" rank="2" time="100000" correct="7" total={totalQuestion} />
                        <Player name="Player 3" rank="3" time="76300" correct="6" total={totalQuestion} />
                        <Player name="Player 7" rank="4" time="1906" correct="5" total={totalQuestion} />
                        <Player name="Player 2" rank="5" time="12093" correct="4" total={totalQuestion} />
                        <Player name="Player 6" rank="6" time="123456789" correct="3" total={totalQuestion} />
                        <Player name="Player 4" rank="7" time="89034590" correct="1" total={totalQuestion} />
                    </div>
                    
                    <div class="bg-[#F8858B] w-1/5 rounded-lg p-5 overflow-auto text-center">
                    <div class="bg-white rounded-full aspect-square h-[30%] m-auto my-2">Average stuff like average correct </div>
                    <div class="bg-white rounded-full aspect-square h-[30%] m-auto my-2">Question answer right</div>
                    <div class="bg-white rounded-full aspect-square h-[30%] m-auto my-2">Question most wrong</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StatManagement