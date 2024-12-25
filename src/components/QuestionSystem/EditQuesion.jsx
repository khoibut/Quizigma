import { useState } from "react"

function OptionStatus( {status, changeStatus} ) {
    if(status) {
        return <button onClick={() => {changeStatus(false)}} class="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold min-w-fit w-40">Correct</button>
    }
    else {
        return <button onClick={() => {changeStatus(true)}} class="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold min-w-fit w-40">Incorrect</button>
    }
}

function MultiChoiceOption( {correct} ) {
    const [displayAnswer, setDisplayAnswer] = useState(correct)

    let button = <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} />

    return (
        <>
            <div class="flex gap-10 border-b-2 py-3">
                <div class="h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div class="option-info">
                    <div class="font-semibold text-lg mb-2">1. i dont know</div>
                    {button}
                </div>
            </div>
        </>
    )
}

function TypeAnswerOption() {
    return (
        <>
            <div class="font-bold text-white text-xl">ANSWER</div>
            <textarea class="w-full min-h-40 rounded-lg p-4 ps-6 outline-none">officer balls</textarea>
        </>
    )
}

function EditQuestion( {openFunction, options} ) {
    return(
        <>
            <div class="flex flex-col w-full m-2 bg-[#338ACB] border-slate-500 rounded-lg md:px-7 lg:w-4/5">
                <div class="flex items-center justify-between rounded-md my-6 p-10 h-1/5 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)]">
                    <div class="flex gap-2 bg-[#BFF4FF] p-4 w-2/5 rounded-lg">
                        <button class="hover:bg-gray-400 hover:scale-110 transition-all h-10 w-10 rounded-lg"><b>B</b></button>
                        <button class="hover:bg-gray-400 hover:scale-110 transition-all h-10 w-10 rounded-lg"><i>I</i></button>
                        <button class="hover:bg-gray-400 hover:scale-110 transition-all h-10 w-10 rounded-lg"><u>U</u></button>
                        <button class="rounded-lg bg-[#B9E42A] px-7 hover:scale-110 transition-all">π Equation</button>
                        <button class="ml-auto rounded-lg bg-[#B9E42A] h-10 w-10 hover:scale-105 transition-all">+</button>
                    </div>
                    <div class="flex gap-6">
                        <button onClick={() => {openFunction(false)}} class="px-8 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                        <select class="bg-[#FF6663] px-8 rounded-lg text-white py-3">
                            <option value="multipleChoice">Multiple choice</option>
                            <option value="textAnswer">Text answer</option>
                        </select>
                        <button class="bg-[#FF6663] px-8 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">SAVE</button>
                    </div>
                </div>
                <input type="text" placeholder="Input option here" class="block mb-6 outline-none w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" />
                <div class="group flex gap-5 mb-8">
                    <div class="w-1/5 aspect-video bg-black rounded-lg">IMAGE</div>
                    <div class="w-4/5 bg-[#e7e2e2] rounded-lg p-4 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                        <div>Question 1:</div>
                        <input class="flex-grow ps-4 bg-transparent outline-none group-hover" type="text" placeholder="Input question here" />
                    </div>
                </div>
                <div class="mx-10 overflow-y-auto">
                    <TypeAnswerOption />
                </div>
            </div>
        </>
    )
}
export default EditQuestion