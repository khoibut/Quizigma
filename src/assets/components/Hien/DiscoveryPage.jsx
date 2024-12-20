import { useState } from "react";
import OnlineIcon from "./OnlineIcon.png"
import PlayIcon from "./Play icon.png"
import DiscoveryIcon from "./DiscoveryIcon.png"
import FolderIcon from "./FolderIcon.png"
import LibraryIcon from "./LibraryIcon.png"
import AddIcon from "./AddIcon.png"
import TemplateQuiz1 from "./TemplateQuiz1.jsx"
import TemplateQuiz2 from "./TemplateQuiz2.jsx"
import Arrow from "./arrow.png"

const quiz =[
    TemplateQuiz1,
    TemplateQuiz2
];

function Discovery(){
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
    
    return (
        <>
            {/* <!-- top bar --> */}
            <div class="font-bold bg-[#338ACB] h-[60px] flex w-full items-center">
                <div class="text-4xl pl-5 items-center">
                    Quizigma
                </div>

                <div class="grow flex-1"></div>

                {/* Search bar */}
                <div class="flex pl-5 items-center">
                    <input type="text" placeholder="  Search.." class="rounded-full h-10 w-[150px]"/>
                </div>
            </div>

            {/* side bar + display bar */}
            <div class="flex w-full h-screen">
                {/* side bar */}
                <div class="bg-white max-w-[420px] grow shrink flex-2">
                    {/* User info */}
                    <div class="max-w-[420px] max-h-[300px] grow  min-w-[100px] min-h-[150px] shrink flex items-center justify-center gap-5 flex-wrap">
                        <div class="rounded-full bg-white border-[5px] border-teal-500
                         w-[100px] h-[100px] mt-5"></div>
                        <div class="rounded-r-xl bg-teal-500 max-w-[250px]
                         max-h-[200px] grow mb-6 flex justify-center items-center 
                         font-bold flex-wrap">
                            Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff Sr
                        </div>
                    </div>

                    {/* Mode box */}
                    <div class="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] max-w-[410px] min-h-[260px]
                    shrink grow flex justify-evenly content-evenly flex-wrap mt-5">
                        <div class="flex flex-wrap justify-evenly grow">
                            {/* Discovery button */}
                            <button class="relative rounded-full bg-sky-900 font-bold text-white text-base min-w-[100px] min-h-[60px] shrink flex flex-col items-center
                            max-w-[140px] max-h-[75px] grow m-[1px]">
                                <img src={DiscoveryIcon} alt="Discovery Icon" class="w-10 h-10 mb-1"/>
                                <span class="text-sm">Discovery</span>
                            </button>

                            {/* Library button */}
                            <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                            duration-200 text-base min-w-[100px] min-h-[60px] shrink flex flex-col items-center hover:animate-bounce
                            max-w-[140px] max-h-[75px] grow m-[1px]">
                                <img src={LibraryIcon} alt="Online Icon" class="w-10 h-10 mb-1"/>
                                <span class="text-sm">Library</span>
                            </button>
                        </div>
                        
                        <div class="flex flex-wrap justify-evenly grow">
                            {/* <!-- Online Button --> */}
                            <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                            duration-200 text-base min-w-[100px] min-h-[60px] shrink flex flex-col items-center justify-center hover:animate-bounce
                            max-w-[140px] max-h-[75px] grow m-[1px]">
                                <img src={OnlineIcon} alt="Online Icon" class="w-10 h-10 mb-1"/>
                                <span class="text-sm">Online</span>
                            </button>

                            {/* <!-- Play Button --> */}
                            <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                            duration-200 text-base min-w-[100px] min-h-[60px] shrink flex flex-col items-center justify-center hover:animate-bounce
                            max-w-[140px] max-h-[75px] grow m-[1px]">
                                <img src={PlayIcon} alt="Play Icon" class="w-10 h-10 mb-1"/>
                                <span class="text-sm">Play</span>
                            </button>
                        </div>
                    </div>

                    {/* Add button */}
                    <div class="flex flex-wrap mt-[80px]">
                        <div class="bg-[#006B2D] w-[80px] h-[80px] flex justify-center items-center">
                            <img src={AddIcon} alt="Add Icon" class="w-[50px] h-[50px]" />
                        </div>
                        <button class="bg-[#21DC6F] h-[80px] max-w-[270px] grow min-w-[90px] 
                        shrink rounded-r-full flex justify-center items-center 
                        hover:border-green-300 hover:border-r-[15px] hover:border-t-[15px] hover:border-b-[15px] text-2xl hover:text-3xl">
                            <div class="font-bold text-white">Add</div>
                        </button>
            
                    </div>

                    {/* Setting */}
                    <div class="flex w-full text-3xl mt-[75px] ">
                        <button id="settings" class="bg-white hover:bg-gray-400 hover:text-white ease-in duration-100
                        min-w-[100px] min-h-[60px] shrink max-w-full max-h-[75px] grow font-bold m-[1px]">
                            Settings
                        </button>
                    </div>
                </div>

                {/* display bar */}
                <div class="bg-gradient-to-r from-[#40c9ff] to-blue-900 min-w-[250px] grow flex flex-col items-center ease-out duration-300">
                    <div className="mb-8">
                        <CurrentQuiz />
                    </div>
                    <div className="max-w-[250px] max-h-[85px] w-full h-full flex flex-wrap justify-center gap-[50px]">
                        <button onClick={handlePrevious} className="bg-gray-500 max-w-[100px] max-h-[70px] w-full h-full flex items-center 
                        justify-center rounded-full -scale-x-100 border-black border-[3px] hover:bg-gray-300 hover:-translate-y-2 ease-out duration-300">
                            <img src={Arrow} alt="arrow" className="max-w-[50px] max-h-[50px]"/>
                        </button>
                        <button onClick={handleNext} className="bg-gray-500 max-w-[100px] max-h-[70px] w-full h-full flex items-center 
                        justify-center rounded-full border-black border-[3px] hover:bg-gray-300 hover:-translate-y-2 ease-out duration-300">
                            <img src={Arrow} alt="arrow" className="max-w-[50px] max-h-[50px]"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Discovery