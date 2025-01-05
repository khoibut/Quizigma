import TemplateQuiz1 from "./Template_Quizzes/TemplateQuiz1.jsx"
import TemplateQuiz2 from "./Template_Quizzes/TemplateQuiz2.jsx"
import TemplateQuiz3 from "./Template_Quizzes/TemplateQuiz3.jsx"
import TemplateQuiz4 from "./Template_Quizzes/TemplateQuiz4.jsx"
import TemplateQuiz5 from "./Template_Quizzes/TemplateQuiz5.jsx"
import TemplateQuiz6 from "./Template_Quizzes/TemplateQuiz6.jsx"
import TemplateQuiz7 from "./Template_Quizzes/TemplateQuiz7.jsx"
import TemplateQuiz8 from "./Template_Quizzes/TemplateQuiz8.jsx"
import TemplateQuiz9 from "./Template_Quizzes/TemplateQuiz9.jsx"
import Arrow from "../Icons&Images/arrow.png"

import { useState } from "react";
const quiz =[
    TemplateQuiz1,
    TemplateQuiz2,
    TemplateQuiz3,
    TemplateQuiz4,
    TemplateQuiz5,
    TemplateQuiz6,
    TemplateQuiz7,
    TemplateQuiz8,
    TemplateQuiz9    
];

function DisplayBar(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
        setCurrentIndex(currentIndex + 1);
    }
    };

    const handlePrevious = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
    };

    const CurrentQuiz = quiz[currentIndex];

    return(
        <>
            {/* display bar */}
            <div class="bg-gradient-to-r from-[#40c9ff] to-blue-900 md:w-fit w-1 h-full grow flex flex-col items-center overflow-auto">
                <div className="md:w-full w-[20vh] h-full flex flex-wrap justify-center md:gap-[5vh] mt-2">
                    <button onClick={handlePrevious} className="bg-gray-500 md:w-[100px] w-[6vh] md:h-[70px] flex items-center 
                    justify-center rounded-full -scale-x-100 hover:bg-gray-200 active:scale-y-75
                    hover:-translate-y-2 ease-out duration-300">
                        <img src={Arrow} alt="arrow" className="md:w-[50px] w-[4vh] md:h-[50px] h-[4vh]"/>
                    </button>
                    <button onClick={handleNext} className="bg-gray-500 md:w-[100px] w-[6vh] md:h-[70px] flex items-center 
                    justify-center rounded-full hover:bg-gray-200 hover:-translate-y-2 ease-out duration-300 active:scale-y-75">
                        <img src={Arrow} alt="arrow" className="md:w-[50px] w-[4vh] md:h-[50px] h-[4vh]"/>
                    </button>
                </div>
                <CurrentQuiz />
            </div>
        </>
    )
}
export default DisplayBar