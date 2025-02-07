import GameTopBar from "./GameTopBar"
function ResultScreen({correct, onNext}) {
    let correctText = ["Nice Gyatt", "Aura moment", "W Rizz", "Holy Sigma", "Ohio God"]
    let wrongText = ["Negitive aura", "Fell off + Ratio", "Sussy baka", "L Rizz"]

    return (
        <>  
            <div onClick={onNext} className="h-[90vh] w-full flex justify-center items-center" style={correct ? {backgroundColor: "#a2f0a4"} : {backgroundColor: "#F0A2A4"}}>  
                <div className="text-center text-7xl font-semibold animate-bigWiggle text-white drop-shadow-xl flex items-center p-10 rounded-lg" style={correct ? {backgroundColor: "#00ef28"} : {backgroundColor: "#EF0028"}}>
                    {correct ?  (<span>{correctText[(Math.floor(Math.random() * 5))]} </span>) : (<span>{wrongText[(Math.floor(Math.random() * 4))]}</span>)}
                </div>
            </div>
        </>
    )
}

export default ResultScreen