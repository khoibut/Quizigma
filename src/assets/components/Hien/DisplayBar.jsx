import TemplateQuiz1 from "./Template_Quizzes/TemplateQuiz1.jsx"
import TemplateQuiz2 from "./Template_Quizzes/TemplateQuiz2.jsx"
import TemplateQuiz3 from "./Template_Quizzes/TemplateQuiz3.jsx"
import TemplateQuiz4 from "./Template_Quizzes/TemplateQuiz4.jsx"
import TemplateQuiz5 from "./Template_Quizzes/TemplateQuiz5.jsx"
import TemplateQuiz6 from "./Template_Quizzes/TemplateQuiz6.jsx"
import TemplateQuiz7 from "./Template_Quizzes/TemplateQuiz7.jsx"
import TemplateQuiz8 from "./Template_Quizzes/TemplateQuiz8.jsx"
import TemplateQuiz9 from "./Template_Quizzes/TemplateQuiz9.jsx"
import Arrow from "./Icons&Images/arrow.png"

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
            <div class="bg-gradient-to-r from-[#40c9ff] to-blue-900 min-w-[250px] min-h-[950px] grow flex flex-col items-center">
                <div className="max-w-[250px] max-h-[85px] w-full h-full flex flex-wrap justify-center gap-[50px]">
                    <button onClick={handlePrevious} className="bg-gray-500 max-w-[100px] max-h-[70px] w-full h-full flex items-center 
                    justify-center rounded-full -scale-x-100 border-black border-[3px] hover:bg-gray-300 
                    hover:-translate-y-2 ease-out duration-300">
                        <img src={Arrow} alt="arrow" className="max-w-[50px] max-h-[50px]"/>
                    </button>
                    <button onClick={handleNext} className="bg-gray-500 max-w-[100px] max-h-[70px] w-full h-full flex items-center 
                    justify-center rounded-full border-black border-[3px] hover:bg-gray-300 hover:-translate-y-2 ease-out duration-300">
                        <img src={Arrow} alt="arrow" className="max-w-[50px] max-h-[50px]"/>
                    </button>
                </div>
                <div className="mb-8">
                    <CurrentQuiz />
                </div>
            </div>
        </>
    )
}
export default DisplayBar