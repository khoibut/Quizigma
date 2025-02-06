function Option( {correct} ) {
    let stat
    if(correct) {
        stat = <div className="px-4 md:px-8 py-2 rounded-full font-bold bg-[#6FF045] text-white capitalize">Correct</div>
    }
    else {
        stat = <div className="px-4 md:px-8 py-2 rounded-full font-bold bg-red-400 text-white capitalize">Incorrect</div>
    }

    return(
        <>
            <div className="flex justify-center max-sm:flex-wrap bg-[#6D96D9] items-center sm:rounded-full sm:px-10 md:px-16 p-4 gap-4 md:gap-10">
                <div className="max-sm:basis-[60%] max-md:w-[120px] md:h-[80px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div className="max-sm:basis-full max-sm:flex max-sm:flex-col max-sm:items-center">
                    <div className="font-semibold text-xl">Question 1:</div>
                    <div className="question-title">Who save Hitler asdasdasdafrom drowning when he was a kid</div>
                </div>
                <div className="sm:ml-auto">
                    {stat}
                </div>
            </div>
        </>
    )
}

function PlayerStat( player ) {
    return (
        <>
            <div className="text-center text-xl gap-1 m-2 flex flex-col items-center">
                <div className="bg-[#3E4757] w-[45%] lg:w-[40%] min-w-fit p-2 rounded-md text-white max-sm:px-4"><b>Score:</b> {player.score}</div>
                <div className="bg-[#3E4757] w-[50%] min-w-fit p-2 rounded-md text-white max-sm:px-4"><b>Correct question:</b> {player.correct}/{player.total}</div>
            </div>
        </>
    )
}
export default PlayerStat