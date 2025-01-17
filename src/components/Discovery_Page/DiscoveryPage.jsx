import React from 'react';
import TopBar from './TopBar.jsx'
import SideBar from './SideBar.jsx';
import TemplateQuiz_v2_1 from "./Template_Quizzes_v2/TemplateQuiz_v2_1.jsx"
import TemplateQuiz_v2_2 from "./Template_Quizzes_v2/TemplateQuiz_v2_2.jsx"
import TemplateQuiz_v2_3 from "./Template_Quizzes_v2/TemplateQuiz_v2_3.jsx"
import TemplateQuiz_v2_4 from "./Template_Quizzes_v2/TemplateQuiz_v2_4.jsx"
import TemplateQuiz_v2_5 from "./Template_Quizzes_v2/TemplateQuiz_v2_5.jsx"
import TemplateQuiz_v2_6 from "./Template_Quizzes_v2/TemplateQuiz_v2_6.jsx"
import TemplateQuiz_v2_7 from "./Template_Quizzes_v2/TemplateQuiz_v2_7.jsx"
import TemplateQuiz_v2_8 from "./Template_Quizzes_v2/TemplateQuiz_v2_8.jsx"
import TemplateQuiz_v2_9 from "./Template_Quizzes_v2/TemplateQuiz_v2_9.jsx"
import axios from 'axios';

function Discovery_Page(){
    let user
    React.useEffect(() => {
        let token = localStorage.getItem('token')
        axios.get('https://quizigmaapi.onrender.com/api/v1/acc/auth', token)
        .then(function(response) {
            console.log(response)
        })
    })
    return(
        <>
            <div className='w-full h-screen overflow-hidden relative'>
                <TopBar />
                <div className='w-full h-full flex'>
                    <SideBar />

                    <div className='flex flex-wrap overflow-auto overflow-x-hidden md:p-5 p-2 pb-20 w-1 h-full bg-gradient-to-b from-[#40c9ff] to-blue-950 md:w-fit grow snap-y justify-between'>
                        <TemplateQuiz_v2_1 />
                        <TemplateQuiz_v2_2 />
                        <TemplateQuiz_v2_3 />
                        <TemplateQuiz_v2_4 />
                        <TemplateQuiz_v2_5 />
                        <TemplateQuiz_v2_6 />
                        <TemplateQuiz_v2_7 />
                        <TemplateQuiz_v2_8 />
                        <TemplateQuiz_v2_9 />
                    </div>

                    {/* <div className='flex flex-wrap items-center overflow-y-sroll p-5 h-full bg-gradient-to-b from-[#40c9ff] to-blue-900 md:w-fit w-1 grow snap-y space-y-10'>
                        <TemplateQuiz_v2_1 />
                        <TemplateQuiz_v2_2 />
                        <TemplateQuiz_v2_3 />
                        <TemplateQuiz_v2_4 />
                        <TemplateQuiz_v2_5 />
                        <TemplateQuiz_v2_6 />
                        <TemplateQuiz_v2_7 />
                        <TemplateQuiz_v2_8 />
                        <TemplateQuiz_v2_9 />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Discovery_Page;