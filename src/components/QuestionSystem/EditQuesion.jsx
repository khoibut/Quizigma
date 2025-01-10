import { useState } from "react"

function OptionStatus( {status, changeStatus} ) {
    if(status) {
        return <button type="button" onClick={() => {changeStatus(false)}} className="rounded-full bg-[#6EE163] text-white text-center py-1 px-4 font-bold w-fit">Correct</button>
    }
    else {
        return <button type="button" onClick={() => {changeStatus(true)}} className="rounded-full bg-[#E54C38] text-white text-center py-1 px-4 font-bold w-fit">Incorrect</button>
    }
}

function MultiChoiceOption( prop ) {
    const [displayAnswer, setDisplayAnswer] = useState(prop.correct)

    let button = <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} />

    return (
        <>
            <div className="flex gap-2 sm:gap-8 border-b-2 py-3 sm:px-1">
                <div className="max-sm:max-w-[100px] max-sm:w-[30%] sm:h-[100px] aspect-[4/3] bg-black rounded-xl">image here</div>
                <div className="overflow-auto w-[50%] flex flex-col">
                    <div className="font-semibold text-lg mb-2">{prop.name}</div>
                    {button}
                </div>
                <div className="self-center ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition-all"  height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </div>
            </div>
        </>
    )
}

function TypeAnswerOption( prop ) {
    return (
        <>
            <div className="font-bold text-white text-xl">ANSWER</div>
            <textarea onChange={(current) => {prop.setAnswer(current.target.value)}} className="w-full min-h-40 rounded-lg p-4 ps-6 outline-none">{prop.answer}</textarea>
        </>
    )
}

function EditQuestion( {openFunction, question} ) {
    const [displayAnswer, setDisplayAnswer] = useState(true)
    //display correc or wrong for multiple choice option
    const [typeAnswer, setTypeAnswer] = useState(question.setId ? false : true)
    //check if currently typing answer
    const [options, setOptions] = useState(question.options)
    //options for multiple choice
    const [answer, setAnswer] = useState(question.options[0].option)
    //answer for typing answer question
    let [questionTitle, setQuestionTitle] = useState(question.question)
    let optionName


    function saveQuestion() {
        if(typeAnswer) {
            setQuestions([...questions, {
                question: questionTitle,
                image: "",
                setId: 0,
                options: [
                    {
                    option: answer,
                    correct: true,
                    image: ""
                    }
                ]
            }])
        }
        else {
            setQuestions([...questions, {
                question: questionTitle,
                image: "",
                setId: 1,
                options: options
            }])
        }
        openFunction(false)
    }
    function addOption() {
        if(optionName.value == '') return false
        setOptions([...options, {
            option: optionName.value, 
            correct: displayAnswer,
            image: ""
        }])
        optionName.value = ''
    }
    // function changeType() {
    //     setTypeAnswer(!typeAnswer)
    // }

    if(typeAnswer) {
        return(
            <>
                <div className="flex min-h-screen flex-col w-full bg-[#338ACB] border-slate-500 rounded-lg lg:px-7 lg:w-4/5">
                    <div className="flex gap-4 items-center justify-between rounded-md my-4 p-5 md:p-10 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
                        <div className="flex gap-2 bg-[#BFF4FF] p-2 sm:p-4 rounded-lg">
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><b>B</b></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><i>I</i></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><u>U</u></button>
                            <button className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => {openFunction(false)}} className="px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            {/* <select onChange={changeType} className="bg-[#FF6663] px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select> */}
                            <button onClick={saveQuestion} className="bg-[#FF6663] px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">SAVE</button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div className="h- full bg-black rounded-lg">IMAGE</div>
                        <div className="w-full bg-[#e7e2e2] rounded-lg p-4 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question 1:</div>
                            <input className="flex-grow ps-4 bg-transparent outline-none group-hover w-full" type="text" value={questionTitle} placeholder="Input question here" onChange={(e) => {setQuestionTitle(e.target.value)}} />
                        </div>
                    </div>
                    <div className="mx-4 sm:mx-10 overflow-y-auto">
                        <TypeAnswerOption answer={answer} setAnswer={setAnswer} />
                    </div>
                </div>
            </>
        )
    }
    else {
        return(
            <>
                <div className="flex min-h-screen flex-col w-full bg-[#338ACB] border-slate-500 rounded-lg lg:px-7 lg:w-4/5">
                    <div className="flex items-center gap-4 justify-between rounded-md my-4 p-5 md:p-10 shadow-[0_8px_10px_5px_rgba(0,0,0,0.2)] flex-wrap">
                        <div className="flex gap-2 bg-[#BFF4FF] p-2 sm:p-4 rounded-lg">
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><b>B</b></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><i>I</i></button>
                            <button className="hover:bg-gray-400 hover:scale-110 transition-all h-8 w-8 rounded-lg"><u>U</u></button>
                            <button className="rounded-lg bg-[#B9E42A] px-4 sm:px-6 hover:scale-110 transition-all max-sm:text-sm">π Equation</button>
                            <button type="button" onClick={addOption} className="ml-auto rounded-lg bg-[#B9E42A] h-8 w-8 hover:scale-105 transition-all">+</button>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            <button onClick={() => {openFunction(false)}} className="px-6 py-3 rounded-lg bg-violet-600 text-white hover:bg-blue-500 hover:scale-105 transition-all">EXIT</button>
                            {/* <select onChange={changeType} className="bg-[#FF6663] px-6 rounded-lg text-white py-3">
                                <option value={1} selected>Multiple choice</option>
                                <option value={0}>Text answer</option>
                            </select> */}
                            <button onClick={saveQuestion} className="bg-[#FF6663] px-6 rounded-lg hover:scale-105 hover:bg-red-600 transition-all text-white py-3">SAVE</button>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mb-6 mx-2 gap-2">
                    <input ref={(current) => (optionName = current)} name="option" type="text" placeholder="Input option here" className="block outline-none w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" />
                        <OptionStatus status={displayAnswer} changeStatus={setDisplayAnswer} />
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-2 mb-5 mx-2">
                        <div className="h- full bg-black rounded-lg">IMAGE</div>
                        <div className="w-full bg-[#e7e2e2] rounded-lg p-4 ps-6 flex flex-col ring-offset-2 ring-offset-[#338ACB] ring-white ring-transparent group-hover:ring-2">
                            <div>Question 1:</div>
                            <input className="flex-grow ps-4 bg-transparent outline-none group-hover w-full" type="text" value={questionTitle} placeholder="Input question here" onChange={(e) => {setQuestionTitle(e.target.value)}} />
                        </div>
                    </div>
                    <div className="mx-2 sm:mx-10 overflow-y-auto min-sm:border-t min-sm:   border-black">
                        {options.map(option => {
                            return <MultiChoiceOption name={option.option} correct={option.correct} />
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default EditQuestion