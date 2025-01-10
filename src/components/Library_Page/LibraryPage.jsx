import TopBar from '../Discovery_Page/TopBar.jsx'
import SideBar from '../Discovery_Page/SideBar.jsx'
import LibTemplateQuiz1 from "./Library_Temp_Quizzes/LibTemplateQuiz1.jsx"
import LibTemplateQuiz2 from "./Library_Temp_Quizzes/LibTemplateQuiz2.jsx"
import LibTemplateQuiz3 from "./Library_Temp_Quizzes/LibTemplateQuiz3.jsx"
import LibTemplateQuiz4 from "./Library_Temp_Quizzes/LibTemplateQuiz4.jsx"
import LibTemplateQuiz5 from "./Library_Temp_Quizzes/LibTemplateQuiz5.jsx"
import LibTemplateQuiz6 from "./Library_Temp_Quizzes/LibTemplateQuiz6.jsx"
import LibTemplateQuiz7 from "./Library_Temp_Quizzes/LibTemplateQuiz7.jsx"
import LibTemplateQuiz8 from "./Library_Temp_Quizzes/LibTemplateQuiz8.jsx"
import LibTemplateQuiz9 from "./Library_Temp_Quizzes/LibTemplateQuiz9.jsx"

function LibraryPage(){
    return(
        <>
            <div className='w-full h-[100vh] overflow-hidden relative'>
                <TopBar />
                <div className='w-full h-full flex'>
                    <SideBar />

                    <div className='flex flex-wrap overflow-hidden md:p-5 p-2 w-1 h-full bg-gradient-to-b from-[#40c9ff] to-blue-950 md:w-fit grow snap-y justify-between'>
                        <div className='flex items-center justify-center bg-[#1F509A] w-full md:h-[12vh] h-[8vh] rounded-full animate-slidein200'>
                            <div className='flex items-center justify-center w-5/6 md:h-2/3  border-4 border-[#D4EBF8] rounded-full animate-slidein200'>
                                <span className='text-white md:text-3xl text-2xl font-bold md:tracking-[2vh] tracking-[1vh] animate-slidein200'>LIBRARY</span>
                            </div>
                        </div>
                        
                        <div className='rounded-3xl flex flex-wrap overflow-auto md:pb-[17vh] pb-[15vh] h-full bg-gradient-to-b from-[#1F509A] to-white snap-y justify-between'>
                            <LibTemplateQuiz1 />
                            <LibTemplateQuiz2 />
                            <LibTemplateQuiz3 />
                            <LibTemplateQuiz4 />
                            <LibTemplateQuiz5 />
                            <LibTemplateQuiz6 />
                            <LibTemplateQuiz7 />
                            <LibTemplateQuiz8 />
                            <LibTemplateQuiz9 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibraryPage;