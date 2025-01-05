import TopBar from './Discovery_Page/TopBar'
import Sidebar from './Discovery_Page/SideBar'
import DisplayBar from "./Discovery_Page/DisplayBar"
import TemplateQuiz1 from "./Discovery_Page/Template_Quizzes/TemplateQuiz1.jsx"
import TemplateQuiz2 from "./Discovery_Page/Template_Quizzes/TemplateQuiz2.jsx"
import TemplateQuiz3 from "./Discovery_Page/Template_Quizzes/TemplateQuiz3.jsx"
import TemplateQuiz4 from "./Discovery_Page/Template_Quizzes/TemplateQuiz4.jsx"
import TemplateQuiz5 from "./Discovery_Page/Template_Quizzes/TemplateQuiz5.jsx"
import TemplateQuiz6 from "./Discovery_Page/Template_Quizzes/TemplateQuiz6.jsx"
import TemplateQuiz7 from "./Discovery_Page/Template_Quizzes/TemplateQuiz7.jsx"
import TemplateQuiz8 from "./Discovery_Page/Template_Quizzes/TemplateQuiz8.jsx"
import TemplateQuiz9 from "./Discovery_Page/Template_Quizzes/TemplateQuiz9.jsx"

function Discovery_Page(){
    return(
        <>
            <div className='w-full h-screen overflow-y-scroll relative'>
                <TopBar />
                <div className='bg-[#338ACB] w-full h-full'>
                    <div className='w-full h-full flex'>
                        <Sidebar />
                        
                        {/* <div className='flex flex-col items-center p-5 h-full bg-gradient-to-b from-[#40c9ff] to-blue-900 md:w-fit w-1 grow overflow-y-scroll snap-y space-y-10'>
                            <TemplateQuiz1 />
                            <TemplateQuiz2 />
                            <TemplateQuiz3 />
                            <TemplateQuiz4 />
                            <TemplateQuiz5 />
                            <TemplateQuiz6 />
                            <TemplateQuiz7 />
                            <TemplateQuiz8 />
                            <TemplateQuiz9 />
                        </div> */}

                        <DisplayBar />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Discovery_Page;