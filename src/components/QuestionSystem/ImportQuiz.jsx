import React, { useRef, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
function ImportQuiz({ openFunction }) {
    const setId = useParams().setId
    return (
        <>
            <div className="flex flex-col w-full bg-white m-2 border-slate-500 rounded-lg md:p-10 lg:w-4/5 h-fit">
                <div className="self-center font-bold sm:text-2xl m-3">IMPORT</div>
                <div className="gap-2 lg:grid lg:grid-cols-2" >
                    <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                        <label className="mt-3 font-semibold" for="quiz-URL">URL:</label>
                        <input className="p-3 rounded-xl bg-red-400 text-black" type="text" />
                    </div>
                    <div className="col-span-2 flex justify-end mt-5 justify-self-center w-2/3 lg:w-full " value="SAVE"><button className="w-full sm:w-fit bg-red-400 rounded-full py-2 px-16 text-white hover:bg-rose-500 hover:scale-105 transition-all">IMPORT</button></div>
                    <div className="col-span-2 flex justify-end my-5 justify-self-center w-2/3 lg:w-full "><button onClick={() => { openFunction(false) }} className="bg-blue-500 hover:bg-violet-800 w-full sm:w-fit rounded-full py-2 px-16 text-white  hover:scale-105 transition-all">Exit</button></div>
                </div>
            </div>
        </>
    )
}
export default ImportQuiz