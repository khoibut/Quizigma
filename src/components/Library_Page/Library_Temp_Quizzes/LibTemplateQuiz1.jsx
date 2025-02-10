import React from 'react'
import axios from 'axios'
function TemplateQuiz({set,sets, setSets}){
    const baseUrl = import.meta.env.API_URL
    function removeSet(){
        console.log(set.id)
        axios.delete(`${baseUrl}/api/v1/set?id=${set.id}`, { headers: { "Authorization": "Bearer " + localStorage.getItem('token') } }).then((response) => {
            setSets(sets.filter((s) => s.id !== set.id))
        })
    }
    function image(){
        if(set?.image){
            return(<img src={set?.image} alt="Profile Picture" class="w-full h-full rounded-3xl rounded-br-none rounded-tr-none" />)
        }
        else{
            return(<></>)
        }
    }
    return(
        <div className="relative bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl m-2 hover:scale-95 transition ease-out duration-300
        md:w-[50vh] w-[36vh] md:h-[45vh] h-[30vh] snap-center flex shrink-0 items-center p-2 cursor-pointer">
            <div className="h-full w-1/2 flex flex-col">
                <div className="w-full h-2/3 rounded-3xl rounded-br-none rounded-tr-none border-r-2 border-black">
                    {image()}
                </div>
                <div className="w-full h-1/3 border-black rounded-3xl rounded-br-none rounded-tr-none border-b-2 border-l-2 border-r-none">
                    <div className="w-full h-1/4 rounded-tl-3xl rounded-br-3xl flex items-center justify-center bg-black opacity-75">
                        <span className="text-white md:text-medium text-sm font-medium">
                            {`${set?.questions.length} QUESTIONS`}
                        </span>
                    </div>
                    <div className="w-full h-3/4 rounded-bl-3xl flex flex-col items-center justify-center md:space-y-4 p-3">
                        <span className="text-white md:text-lg text-sm font-medium overflow-hidden">
                        </span>
                        <span className="text-white md:text-lg text-sm font-medium">
                            {`ID: #${set?.id}`}
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/2 rounded-r-3xl border-black border-t-2 border-r-2 border-b-2">
                <div className="w-full h-2/3 rounded-tr-3xl">
                    <div className="w-full h-1/3 rounded-tr-3xl p-1 overflow-hidden flex items-center justify-center">
                        <span className="text-white md:text-lg text-md font-bold ">
                            {set?.name}
                        </span>
                    </div>
                    <div className="w-full h-2/3 p-2">
                        <span className="text-gray-800 text-sm opacity-75">{set?.description}</span>
                    </div>
                </div>
                <div className="w-full h-1/3 rounded-br-3xl flex items-center justify-center flex-col">
                    <div className="w-full h-2/3 flex items-center">
                        <button className="bg-white h-5/6 w-1/2 rounded-3xl scale-90 flex items-center justify-center hover:scale-100 transition ease-out duration-500 hover:animate-rgbBorder hover:border-[3px]">
                            <span className="text-lg font-bold text-gray-700">Assign</span>
                        </button>
                        <button onClick={()=>{window.location.href=`/host/${set.id}`}} className="bg-white h-5/6 w-1/2 rounded-3xl scale-90 flex items-center justify-center hover:scale-100 transition ease-out duration-500 hover:animate-rgbBorder hover:border-[3px]">
                            <span className="text-lg font-bold text-gray-700">Host</span>
                        </button>
                    </div>
                    <div className="w-full h-1/3 p-1 flex items-center justify-center">
                        <button className="group bg-gray-600 h-full w-full rounded-lg scale-90 flex items-center justify-center hover:scale-100 transition ease-out duration-500">
                            <span onClick={removeSet} className="md:text-lg text-sm font-bold text-gray-300 group-hover:text-gray-100">Remove</span>
                        </button>
                        <button className="group bg-gray-600 h-full w-full rounded-lg scale-90 flex items-center justify-center hover:scale-100 transition ease-out duration-500">
                            <span onClick={()=>{window.location.href=`/questionlist/${set.id}`}} className="md:text-lg text-sm font-bold text-gray-300 group-hover:text-gray-100">Edit</span>
                        </button>                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TemplateQuiz