import GameTopBar from "./GameTopBar"
function ResultScreen({correct}) {
    let correctText = ["Skibidi Rizz", "Aura moment", "727 WYSI", "Holy gojira", "Femboy in a meter radius"]
    let wrongText = ["Negitive aura", "I heard you were very strong", "Sussy baka", "My mother is kinda homeless"]

    return (
        <>  
            <In_Game_Top_Bar />
            <div className="h-[90vh] w-full flex justify-center items-center" style={correct ? {backgroundColor: "#BAE5EE"} : {backgroundColor: "#F0A2A4"}}>  
                <div className="text-center text-7xl font-semibold animate-bigWiggle text-white drop-shadow-xl flex items-center bg-green-500 p-10 rounded-lg">
                    {correct ?  (<span>{correctText[(Math.floor(Math.random() * 6))]} </span>) : (<span>{wrongText[(Math.floor(Math.random() * 5))]}</span>)}
                </div>
            </div>
        </>
    )
}

export default ResultScreen