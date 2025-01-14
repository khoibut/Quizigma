import { useState } from "react"
import { useParams } from "react-router";
import { useRef } from "react";
import axios from "axios";
function LiveGame({ timeLimit }) {
    return (
        <div class="flex flex-col gap-4 h-full">
            <div>
                <span class="font-semibold text-lg">Max Score: </span>
                <input class="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            <div>
                <span class="font-semibold text-lg">Time: </span>
                <input ref={timeLimit} class="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            <div class="flex items-center gap-4">
                <span class="font-semibold text-lg">Allow late join: </span>
                <input class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
            </div>
        </div>
    )
}
function Assignment() {
    return (
        <div class="flex flex-col gap-4 w-full">
            <div>
                <span class="font-semibold text-lg">Max Score: </span>
                <input class="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            <div>
                <span class="font-semibold text-lg">Deadline: </span>
                <input class="p-1 ps-3 outline-none rounded-lg" type="text"></input>
            </div>
            <div class="flex flex-col">
                <div class="font-semibold text-lg">Assignment link: </div>
                <div onClick={() => { navigator.clipboard.write('sex.com/sexsupersex'); }} class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden w-full">sex.com/sexsupersex</div>
            </div>
            <div class='flex justify-between'>
                <span class="font-semibold text-lg">QR Code: </span>
                <span class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] h-[100px] w-[100px]">idk</span>
            </div>
        </div>
    )
}
function MultiChoiceOption({ correct }) {
    if (correct) {
        return (
            <>
                <div class="flex gap-10 border-b-2 py-3">
                    <div class="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                    <div class="option-info">
                        <div class="font-semibold text-lg mb-2">1. i dont know</div>
                        <div class="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold">Correct</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div class="flex gap-10 border-b-2 py-3">
                <div class="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div class="option-info">
                    <div class="font-semibold text-lg mb-2">1. i dont know</div>
                    <div class="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold">Wrong</div>
                </div>
            </div>
        </>
    )
}
function MultiChoiceQuestion() {
    const [active, setActive] = useState(true)
    let option

    function open() {
        if (active) {
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
            <div class="group mt-5">
                <div onClick={() => { open() }} class="flex bg-[#6D96D9] items-center px-10 py-10 sm:py-2 gap-2 sm:gap-10 max-sm:flex-wrap">
                    <div class="h-[50px] sm:w-auto sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center sm:my-5">image here</div>
                    <div class="question">
                        <div class="font-semibold text-xl">Question 1:</div>
                        <div class="question-title">Who save Hitler from drowning when he was a kid</div>
                    </div>
                    <div class="ml-auto flex gap-5 items-center">
                        <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Multiple choice</div>
                    </div>
                </div>
                <div ref={(current) => (option = current)} class="shadow-xl px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div class="option-list">
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
    const [active, setActive] = useState(true)
    let option

    function open() {
        if (active) {
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
            <div onClick={() => { open() }} class="group mt-5">
                <div class="flex bg-[#6D96D9] items-center px-10 py-10 sm:py-2 gap-2 sm:gap-10 max-sm:flex-wrap">
                    <div class="h-[50px] sm:w-auto sm:h-[100px] aspect-[4/3] bg-black rounded-xl self-center my-5">image here</div>
                    <div class="question">
                        <div class="font-semibold text-xl">Question 1:</div>
                        <div class="question-title">Who kill jeff</div>
                    </div>
                    <div class="ml-auto flex gap-5 items-center">
                        <div class="px-10 py-2 rounded-full font-bold bg-red-400 text-white text-nowrap">Type answer</div>
                    </div>
                </div>
                <div ref={(current) => (option = current)} class="shadow-xl px-8 rounded-b-lg h-0 overflow-auto duration-300 transition-all flex flex-col">
                    <div class="bg-[#00000020] min-h-[180px] h-fit p-8 rounded-xl">The answer is my cock</div>
                </div>
            </div>
        </>
    )
}

function HostGame() {
    const setId = useParams()
    const timeLimit = useRef()
    const [typeOfHost, setTypeOfHost] = useState(<LiveGame timeLimit={timeLimit} />)
    let liveGameButton
    let assignmentButton
    function liveGame() {
        setTypeOfHost(<LiveGame timeLimit={timeLimit} />)
        liveGameButton.style.width = '65%'
        liveGameButton.style.borderRadius = '0 9999px 9999px 0'
        liveGameButton.style.boxShadow = '6px 0 2px rgba(0,0,15,0.5)'
        liveGameButton.style.zIndex = '10'
        assignmentButton.style.width = '60%'
        assignmentButton.style.borderRadius = '0'
        assignmentButton.style.boxShadow = 'none'
        assignmentButton.style.zIndex = '1'
    }
    function assignment() {
        setTypeOfHost(<Assignment />)
        assignmentButton.style.width = '65%'
        assignmentButton.style.borderRadius = '9999px 0 0 9999px'
        assignmentButton.style.boxShadow = '-6px 0 2px rgba(0,0,15,0.5)'
        assignmentButton.style.zIndex = '10'
        liveGameButton.style.width = '60%'
        liveGameButton.style.borderRadius = '0'
        liveGameButton.style.boxShadow = 'none'
        liveGameButton.style.zIndex = '1'
    }

    function startGame() {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNzM1MDE1MDY4fQ.k5gwjnOWJSSMHkgmWThL2N3Z0f-t8xOUTwnkMG-ePsg')
        const roomDTO = {
            setId: setId.setId,
            timeLimit: timeLimit.current.value
        }
        axios.post('http://localhost:8080/api/v1/room', roomDTO,
            { headers: 
                { 'Authorization': `Bearer ${localStorage.getItem('token')}` 
            } 
        }).then((response) => {
            if(response.status === 200){
                window.location.href = `/game/host/${response.data.roomId}`
            }else{
                console.log(response.data)
            }
        })
    }
    return (
        <>
            <div class="p-2">
                <div class="flex items-center gap-8 bg-[#3272E8] rounded-lg sm:h-[18vh] p-5 max-sm:flex-wrap">
                    <div class="h-[100px] sm:h-full aspect-video bg-black rounded-md">IMAGE</div>
                    <div>
                        <div class="font-bold text-xl text-white">Title</div>
                        <div class="text-md text-white">Questions: [amount of question]</div>
                        <div class="text-md text-white">Author</div>
                    </div>
                    <button onClick={startGame} class="px-4 md:px-10 py-2 rounded-full md:font-bold bg-red-400 text-white ml-auto hover:bg-rose-500 hover:scale-105 transition-all">START</button>
                </div>

                <div class="grid lg:grid-cols-[300px_1fr] md:grid-cols-[230px_1fr] gap-2 mt-2 h-[100vh] grid-rows-2 md:grid-rows-1">
                    <div class="bg-[#8DBEE2]">
                        <div class="h-[12%] relative">
                            <button class="bg-[#8178EA] w-[65%] h-[80px] z-10 absolute left-0 rounded-r-full shadow-[rgba(0,0,15,0.5)_6px_0_2px_0px] transition-all" ref={(current) => { liveGameButton = current }} onClick={liveGame}>LIVE GAME</button>
                            <button class="bg-[#948DE2] w-[60%] h-[80px] right-0 absolute transition-all" ref={(current) => { assignmentButton = current }} onClick={assignment}>ASSIGNMENT</button>
                        </div>
                        <div class="m-auto mt-10 px-6 sm:px-20 md:p-2">
                            {typeOfHost}
                        </div>
                    </div>

                    <div class="bg-[#8DBEE2] overflow-y-auto h-full">
                        <MultiChoiceQuestion />
                        <TextAnswerQuestion />
                        <MultiChoiceQuestion />
                        <TextAnswerQuestion />
                    </div>
                </div>
            </div>

        </>
    )
}
export default HostGame