import In_Game_Top_Bar from "./In_Game_Top_Bar"

function ResultScreen({correct}) {
    let correctText = ["Skibidi Rizz", "Aura moment", "727 WYSI", "Holy gojira", "Femboy in a meter radius"]
    let wrongText = ["Negitive aura", "I heard you were very strong", "Sussy baka", "My mother is kinda homeless"]

    if(correct) {    
        return (
            <>  
                <In_Game_Top_Bar />
                <div className="bg-[#BAE5EE] h-[90vh] w-full flex justify-center items-center">
                    <div className="text-center text-7xl font-semibold animate-bigWiggle text-white drop-shadow-xl flex items-center">
                        <span>{correctText[(Math.floor(Math.random() * 6))]} </span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#fff"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>  
                <In_Game_Top_Bar />
                <div className="bg-[#F0A2A4] h-[90vh] w-full flex justify-center items-center">
                    <div className="text-center text-7xl font-semibold animate-bigWiggle text-white drop-shadow-xl flex items-center">
                        <span>{wrongText[(Math.floor(Math.random() * 5))]}</span>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                </div>
            </>
        )
    }
}

export default ResultScreen