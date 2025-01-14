import Sanji from "../../Icons&Images/sanji.jpg"

function TemplateQuiz2(){
    return(
        <div class="bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl
        md:w-[80vh] w-[36vh] h-[90vh] snap-center 
        flex flex-col items-center gap-2 shrink-0 items-center p-2 ">
            <div class="flex rounded-3xl bg-white md:w-[60vh] md:h-[34vh] overflow-hidden">
                <img src={Sanji} alt="Profile Picture" class="md:w-full w-[40vh] md:h-full h-[40vh]" />
            </div>

            <div class="rounded-full bg-cyan-900 max-w-[600px] max-h-[70px] w-full 
            font-bold text-white flex justify-center items-center md:text-xl -translate-y-3"> 
                999 Questions
            </div>

            <div class="relative rounded-xl bg-cyan-900 max-w-[600px] max-h-[80px] w-full font-medium 
            text-white flex justify-center items-center md:text-lg text-center flex-col">
                <span className="text-ellipsis overflow-hidden">
                    Title: Gyatt
                </span> 
                <span>
                    Author: Luffy
                </span>
                <span>
                    ID: #72769
                </span>
            </div>

            <div class="relative bg-blue-900 md:w-[68vh] w-[32vh] md:h-[23vh] h-[20vh] justify-center rounded-b-2xl items-center md:text-lg text-gray-200 px-5 pt-1 -translate-y-3">
                Desc...
            </div>

            <div class="relative bg-gray-400 max-w-[500px] max-h-[50px] grow w-full justify-center items-center flex "></div>

            <div class="relative max-w-[500px] max-h-[70px] grow w-full justify-center items-center flex justify-cente gap-5">
                <button class=" text-white font-bold rounded-l-full relative bg-rose-400 max-w-[200px] 
                max-h-[70px] h-full w-full justify-center items-center flex justify-center hover:scale-110 transition-transform 
                duration-300 ease-out" > 
                    ASSIGN
                </button>
                <button class="text-white font-bold rounded-r-full relative bg-rose-400 max-w-[200px]
                    max-h-[70px] h-full w-full justify-center items-center flex justify-center hover:scale-110 
                    transition-transform duration-300 ease-out" > 
                    HOST
                </button>   
            </div>
        </div>
    )
}
export default TemplateQuiz2