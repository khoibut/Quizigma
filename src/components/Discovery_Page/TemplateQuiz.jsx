import React, { useState } from 'react'
import axios from 'axios'
function TemplateQuiz({set}){
    function image(){
        if(set?.image){
            return(<img src={set?.image} alt="Profile Picture" class="object-cover h-full w-full rounded-3xl rounded-br-none rounded-tr-none" />)
        }
        else{
            return(<></>)
        }
    }
    return(
        <div className="relative bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl m-2 hover:scale-95 transition ease-out  duration-300 md:w-[50vh] w-[36vh] md:h-[45vh] h-[60vh] snap-center flex shrink-0 items-center p-2 cursor-pointer">
            <div className="h-full w-1/2 flex flex-col">
                <div className="w-full h-[20vh] rounded-3xl rounded-br-none rounded-tr-none border-r-2 border-black">
                    {image()}
                </div>
                <div className="w-full h-full border-black rounded-3xl rounded-br-none rounded-tr-none border-b-2 border-l-2 border-r-none">
                    <div className="w-full h-1/4 rounded-tl-3xl rounded-br-3xl flex items-center justify-center bg-black opacity-75">
                        <span className="text-white md:text-medium text-sm font-medium">
                            {`${set?.questions.length} QUESTIONS`}
                        </span>
                    </div>
                    <div className="w-full h-3/4 rounded-bl-3xl flex flex-col items-center justify-center md:space-y-4 p-3">
                        <span className="text-white md:text-lg text-sm font-medium">
                            {`ID: #${set?.id}`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2 rounded-r-3xl border-black border-t-2 border-r-2 border-b-2">
                <div className="w-full h-[50%] rounded-tr-3xl">
                    <div className="w-full h-1/3 rounded-tr-3xl p-1 overflow-hidden flex items-center justify-center">
                        <span className="text-white md:text-lg text-md font-bold ">
                            {set?.name}
                        </span>
                    </div>
                    <div className="w-full h-2/3 p-2 overflow-hidden">
                        <span className="text-gray-800 text-sm opacity-75">{set?.description}</span>
                    </div>
                </div>
                <div className="w-full rounded-br-3xl flex items-center justify-center flex-col gap-2">
                    <div className="w-full h-2/3 flex items-center max-md:flex-col">
                        <button className="bg-white h-5/6 w-1/2 max-md:w-full rounded-3xl scale-90 flex items-center justify-center hover:scale-100 transition ease-out duration-500 p-2 hover:animate-rgbBorder border-transparent border-[3px]">
                            <span className="text-lg font-bold text-gray-700">Assign</span>
                        </button>
                        <button onClick={()=>{window.location.href=`/host/${set.id}`}} className="bg-white h-5/6 w-1/2 rounded-3xl scale-90 flex items-center justify-center max-md:w-full hover:scale-100 transition ease-out duration-500 p-2 hover:animate-rgbBorder border-transparent border-[3px]">
                            <span className="text-lg font-bold text-gray-700">Host</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TemplateQuiz