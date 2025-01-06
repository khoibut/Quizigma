function Option( {correct} ) {
    let stat
    if(correct) {
        stat = <div class="px-10 py-2 rounded-full font-bold bg-[#6FF045] text-white capitalize">Correct</div>
    }
    else {
        stat = <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white capitalize">Incorrect</div>
    }

    return(
        <>
            <div class="flex bg-[#6D96D9] items-center rounded-full px-16 py-2 gap-10">
                <div class="h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                <div class="question">
                    <div class="font-semibold text-xl">Question 1:</div>
                    <div class="question-title">Who save Hitler from drowning when he was a kid</div>
                </div>
                <div class="ml-auto flex gap-5 items-center">
                    {stat}
                </div>
            </div>
        </>
    )
}

function PlayerStat( player ) {
    return (
        <>
            <div class="bg-green-500 w-full h-[10vh]"></div>
            <div class="text-center font-extrabold text-xl m-7">
                <div>Score: {player.score}</div>
                <div>Correct question: {player.correct}/{player.total}</div>
            </div>
            <div class="bg-[#3E4757] w-[96%] h-[72vh] m-auto p-10 overflow-auto flex flex-col gap-5">
                <Option correct={true} />
                <Option correct={true} />
                <Option correct={false} />
            </div>
        </>
    )
}
export default PlayerStat