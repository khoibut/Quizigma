import { useState } from "react"
import { useNavigate } from "react-router";

function LiveGame() {
    return (
        <div className="flex flex-col gap-4">
            {/* Maximun score input */}
            <div>
                <span className="font-semibold text-lg">Max Score: </span>
                <input className="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            {/* Game length */}
            <div>
                <span className="font-semibold text-lg">Time: </span>
                <input className="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            {/* Late join check box */}
            <div className="flex items-center gap-4">
                <span className="font-semibold text-lg">Allow late join: </span>
                <input className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
            </div>
        </div>
    )
}
function Assignment() {
    return (
        <div className="flex flex-col gap-4">
            {/* maximum score input */}
            <div>
                <span className="font-semibold text-lg">Max Score: </span>
                <input className="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            {/* time before assignment close */}
            <div>
                <span className="font-semibold text-lg">Deadline: </span>
                <input className="p-1 ps-3 outline-none rounded-lg" type="date"></input>
            </div>
            {/* pre-generated link */}
            <div className="flex flex-col">
                <div className="font-semibold text-lg">Assignment link: </div>
                <div onClick={() => {navigator.clipboard.write('sex.com/sexsupersex');}} className="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden w-full">sex.com/sexsupersex</div>
            </div>
            {/* pre-generated qr code */}
            <div className='flex justify-between'>
                <span className="font-semibold text-lg">QR Code: </span>
                <span className="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] h-[100px] w-[100px]">idk</span>
            </div>
        </div>
    )
}
function MultiChoiceOption( {correct} ) {
    if(correct) {
        return (
            <>
                <div className="flex gap-10 border-b-2 py-3">
                    <div className="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                    <div className="option-info">
                        <div className="font-semibold text-lg mb-2">1. i dont know</div>
                        <div className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold">Correct</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex gap-10 border-b-2 py-3">
                <div className="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div className="option-info">
                    <div className="font-semibold text-lg mb-2">1. i dont know</div>
                    <div className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion() {
    // check if options container is open
    const [active, setActive] = useState(false)
    // options container element below question
    let option

    function open() {
        if(!active) {
            option.style.height = '250px'
            option.style.paddingTop = '2rem'
            option.style.paddingBottom = '2rem'
        }
        else {
            option.style.height = '0'
            option.style.paddingTop = '0'
            option.style.paddingBottom = '0'
        }
        setActive(!active)
    }

    return (
        <>
            <div className="group mt-4">
                <div onClick={() => {open()}} className="flex bg-[#6D96D9] items-center px-8 py-4 gap-2 sm:gap-10 max-sm:flex-wrap">
                    <div className="h-[100px] sm:w-auto sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center">image here</div>
                    <div className="max-sm:basis-full">
                        <div className="font-semibold text-xl">Question 1:</div>
                        <div className="question-title">Who save Hitler from drowning when he was a kid</div>
                    </div>
                    <div className="ml-auto flex gap-5 items-center">
                        <div className="px-10 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Multiple choice</div>
                    </div>
                </div>
                <div ref={(current) => (option = current)} className="shadow-xl px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div className="option-list">
                        <MultiChoiceOption correct={true} />
                        <MultiChoiceOption correct={true} />
                        <MultiChoiceOption correct={false} />
                    </div>
                </div>
            </div>
        </>
    )
}
function TextAnswerQuestion() {
    // check if answer key container is open
    const [active, setActive] = useState(false)
    // answer key container element below question
    let option

    // open answer key container
    function open() {
        if(!active) {
            option.style.height = '250px'
            option.style.paddingTop = '2rem'
            option.style.paddingBottom = '2rem'
        }
        else {
            option.style.height = '0'
            option.style.paddingTop = '0'
            option.style.paddingBottom = '0'
        }
        setActive(!active)
    }

    return (
        <>
            <div onClick={() => {open()}} className="group mt-4">
            <div onClick={() => {open()}} className="flex bg-[#6D96D9] items-center px-8 py-4 gap-2 sm:gap-10 max-sm:flex-wrap">
                    <div className="h-[100px] sm:w-auto sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center">image here</div>
                    <div className="max-sm:basis-full">
                        <div className="font-semibold text-xl">Question 1:</div>
                        <div className="question-title">Who kill jeff</div>
                    </div>
                    <div className="ml-auto flex gap-5 items-center">
                        <div className="px-10 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Type answer</div>
                    </div>
                </div>
                <div ref={(current) => (option = current)} className="shadow-xl px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div className="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">The answer is my cock</div>
                </div>
            </div>
        </>
    )
}

function HostGame() {
    // display game mode options which ever the user is going to host (live game or assignment)
    const [typeOfHost, setTypeOfHost] = useState(<LiveGame />) 
    // live game toggle element and assignment toggle element use for styling
    let liveGameButton
    let assignmentButton
    const navigate = useNavigate()

    // switch, toggle game mode styling
    function liveGame() {
        setTypeOfHost(<LiveGame />)
        liveGameButton.style.borderRadius = '0 9999px 9999px 0'
        liveGameButton.style.boxShadow = '6px 0 2px rgba(0,0,15,0.5)'
        liveGameButton.style.zIndex = '10'
        assignmentButton.style.borderRadius = '0'
        assignmentButton.style.boxShadow = 'none'
        assignmentButton.style.zIndex = '1'
    }
    function assignment() {
        setTypeOfHost(<Assignment />)
        assignmentButton.style.borderRadius = '9999px 0 0 9999px'
        assignmentButton.style.boxShadow = '-6px 0 2px rgba(0,0,15,0.5)'
        assignmentButton.style.zIndex = '10'
        liveGameButton.style.borderRadius = '0'
        liveGameButton.style.boxShadow = 'none'
        liveGameButton.style.zIndex = '1'
    }
    function startGame() {
        navigate("/game/host#randomnumber")
    }

    return (
        <>
            <div className="p-2 flex flex-col">
                {/* top bar quiz info and start button */}
                <div className="flex items-center gap-8 bg-[#3272E8] rounded-lg sm:h-[18vh] p-5 max-sm:flex-wrap">
                    {/* image container */}
                    <div className="h-[80px] sm:h-full aspect-video bg-black rounded-md">IMAGE</div>
                    {/* quiz info */}
                    <div>
                        <div className="font-bold text-xl text-white">Title</div>
                        <div className="text-md text-white">Questions: [amount of question]</div>
                        <div className="text-md text-white">Author</div>
                    </div>
                    <button onClick={startGame} className="max-sm:basis-full px-8 md:px-10 py-2 rounded-full md:font-bold bg-red-400 text-white ml-auto hover:bg-rose-500 hover:scale-105 transition-all">START</button>
                </div>

                <div className="flex flex-col md:grid lg:grid-cols-[310px_1fr] md:grid-cols-[230px_1fr] gap-1 mt-2 md:grid-rows-1 h-[78vh]">
                    {/* sidebar for choosing game mode */}
                    <div className="bg-[#8DBEE2] flex flex-col max-md:h-[50vh] gap-4 min-h-fit">
                        {/* game mode switch */}
                        <div className="grid grid-cols-[1fr_.4fr_1fr] h-[60px]">
                            <button className="bg-[#8178EA] col-start-1 col-end-3 row-start-1 row-end-1 z-10 rounded-r-full shadow-[rgba(0,0,15,0.5)_6px_0_2px_0px] transition-all" ref={(current) => {liveGameButton = current}} onClick={liveGame}>LIVE GAME</button>
                            <button className="bg-[#948DE2] col-start-2 col-end-4 row-start-1 row-end-1 transition-all col-span-" ref={(current) => {assignmentButton = current}} onClick={assignment}>ASSIGNMENT</button>
                        </div>
                        {/* game mode options display */}
                        <div className="p-2">
                            {typeOfHost}
                        </div>
                    </div>

                    {/* quiz questions container */}
                    <div className="bg-[#8DBEE2] overflow-y-auto h-full py-4">
                        <MultiChoiceQuestion />
                        <TextAnswerQuestion />
                        <MultiChoiceQuestion />
                        <TextAnswerQuestion />
                        <TextAnswerQuestion />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default HostGame