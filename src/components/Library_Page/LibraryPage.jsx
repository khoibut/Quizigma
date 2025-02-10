import TopBar from '../Discovery_Page/TopBar.jsx'
import SideBar from '../Discovery_Page/SideBar.jsx'
import TemplateQuiz from '../Library_Page/Library_Temp_Quizzes/LibTemplateQuiz1.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function LibraryPage() {
    const baseUrl = import.meta.env.VITE_API_URL
    const [sets, setSets] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/set`, { headers: { "Authorization": "Bearer " + localStorage.getItem('token') } }).then((response) => {
            console.log(response.data)
            setSets(response.data)
        })
    }, [])
    return (
        <>
            <div className='w-full h-[100vh] overflow-hidden relative'>
                <TopBar />
                <div className='w-full h-full flex'>
                    <SideBar />

                    <div className='flex flex-wrap overflow-hidden md:p-5 p-2 w-1 h-full bg-gradient-to-b from-[#40c9ff] to-blue-950 md:w-fit grow snap-y justify-between'>
                        <div className='flex items-center justify-center bg-[#1F509A] w-full md:h-[12vh] h-[8vh] rounded-full animate-slidein200'>
                            <div className='flex items-center justify-center w-5/6 md:h-2/3  border-4 border-[#D4EBF8] rounded-full animate-slidein200'>
                                <span className='text-white md:text-3xl text-2xl font-bold md:tracking-[2vh] tracking-[1vh] animate-slidein200 overflow-hidden'>LIBRARY</span>
                            </div>
                        </div>

                        <div className='rounded-3xl flex flex-wrap overflow-auto md:pb-[17vh] pb-[15vh] h-full gap-x-10'>
                            {sets.map((set) => {
                                console.log(set)
                                return (
                                    <TemplateQuiz set={set} sets={sets} setSets={setSets} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibraryPage;