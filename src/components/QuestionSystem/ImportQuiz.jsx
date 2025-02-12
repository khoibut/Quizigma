import React, { useRef, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { use } from 'react'
function ImportQuiz({ openFunction }) {
    const baseUrl = import.meta.env.VITE_API_URL
    const setId = useParams().setId
    const url = useRef()
    const [type, setType] = useState("Quizizz")
    const currentType = useRef()
    function typeRender() {
        if (type == "Quizizz") {
            return <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                <label className="mt-3 font-semibold" for="quiz-URL">Quizizz URL:</label>
                <input ref={url} className="p-3 rounded-xl bg-red-400 text-black" type="text" id="quiz-URL" name="quiz-URL" />
            </div>
        } else if (type == "Blooket") {
            return <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                <label className="mt-3 font-semibold" for="quiz-URL">Blooket URL:</label>
                <input ref={url} className="p-3 rounded-xl bg-red-400 text-black" type="text" id="quiz-URL" name="quiz-URL" />
            </div>
        } else if (type == "Spreadsheet") {
            return <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                <label className="mt-3 font-semibold" for="quiz-URL">Spreadsheet:</label>
                <input className="p-3 rounded-xl bg-red-400 text-black" type="file" id="quiz-URL" name="quiz-URL" />
            </div>
        }
    }
    function importQuiz() {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        if (type == "Quizizz") {
            axios.post(`${baseUrl}/api/v1/import/quizizz?id=${setId}`, { url: url.current.value }, { headers: headers }).then((response) => {
                window.location.href = `/questionlist/${setId}`
            }).catch((error) => {
                console.warn("error");
            })
        } else if (type == "Blooket") {
            axios.post(`${baseUrl}/api/v1/import/blooket?id=${setId}`, { url: url.current.value }, { headers: headers }).then((response) => {
                window.location.href = `/questionlist/${setId}`
            }).catch((error) => {
                console.warn("error");
            })
        } else if(type=="Spreadsheet"){
            let file = document.getElementById("quiz-URL").files[0]
            let formData = new FormData()
            formData.append("file",file)
            axios.post(`${baseUrl}/api/v1/import/spreadsheet?id=${setId}`, formData, { headers: headers }).then((response) => {
                window.location.href = `/questionlist/${setId}`
            }).catch((error) => {
                console.warn("error");
            })
        }
    }
    return (
        <>
            <div className="flex flex-col w-full bg-white m-2 border-slate-500 rounded-lg md:p-10 lg:w-4/5 h-fit">
                <div className="self-center font-bold sm:text-2xl m-3">IMPORT</div>
                <div className="gap-2 lg:grid lg:grid-cols-2" >
                    <div className="flex flex-col justify-self-center w-2/3 lg:w-full">
                        <label className="mt-3 font-semibold" for="quiz-URL">Type of Import:</label>
                        <select ref={currentType} onChange={(e) => {
                            console.log(currentType.current.value)
                            setType(currentType.current.value)
                        }} className="p-3 rounded-xl bg-red-400 text-black">
                            <option value="Quizizz">Quizizz</option>
                            <option value="Blooket">Blooket</option>
                            <option value="Spreadsheet">Spreadsheet</option>

                        </select>
                        {typeRender()}
                    </div>
                    <div className="col-span-2 flex justify-end mt-5 justify-self-center w-2/3 lg:w-full " value="SAVE"><button onClick={importQuiz} className="w-full sm:w-fit bg-red-400 rounded-full py-2 px-16 text-white hover:bg-rose-500 hover:scale-105 transition-all">IMPORT</button></div>
                    <div className="col-span-2 flex justify-end my-5 justify-self-center w-2/3 lg:w-full "><button onClick={() => { openFunction(false) }} className="bg-blue-500 hover:bg-violet-800 w-full sm:w-fit rounded-full py-2 px-16 text-white  hover:scale-105 transition-all">Exit</button></div>
                </div>
            </div>
        </>
    )
}
export default ImportQuiz