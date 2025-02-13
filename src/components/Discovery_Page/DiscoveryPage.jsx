import React from 'react';
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx';
import TemplateQuiz from './TemplateQuiz.jsx';
import axios from 'axios';
import { useState,useEffect ,useRef} from 'react';
function Discovery_Page() {
    const baseUrl = import.meta.env.VITE_API_URL
    const [sets, setSets] = useState([])
    useEffect(() => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        axios.get(`${baseUrl}/api/v1/set/discovery`, { headers: headers }).then((response) => {
            console.log(response.data)
            setSets(response.data)
        })
    }, [])
    let user
    return (
        <>
            <div className='w-full h-screen overflow-hidden relative'>
                <TopBar searchBar={true} />
                <div className='w-full h-full flex'>
                    <SideBar />

                    <div className='flex flex-wrap overflow-hidden md:p-5 p-2 w-1 h-full bg-gradient-to-b from-[#40c9ff] to-blue-950 md:w-fit grow snap-y justify-between'>
                        <div className='flex items-center justify-center bg-[#1F509A] w-full md:h-[12vh] h-[8vh] rounded-full animate-slidein200'>
                            <div className='flex items-center justify-center w-5/6 md:h-2/3  border-4 border-[#D4EBF8] rounded-full animate-slidein200'>
                                <span className='text-white md:text-3xl text-2xl font-bold md:tracking-[2vh] tracking-[1vh] animate-slidein200 overflow-hidden'>RECENT QUIZZES</span>
                            </div>
                        </div>

                        <div className='flex flex-wrap overflow-auto md:pb-[17vh] pb-[15vh] h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/40 [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-track]:cursor-default'>
                            {sets.map((set) => {
                                console.log(set)
                                return (
                                    <TemplateQuiz key={set.id} set={set} sets={sets} setSets={setSets} />
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Discovery_Page;