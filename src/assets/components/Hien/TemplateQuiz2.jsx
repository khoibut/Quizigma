import image2 from "./image2.jpg"

function TemplateQuiz2(){
    return(
        <div class="bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl max-w-[800px] h-[850px] grow min-w-[200px] 
        flex flex-col flex-wrap items-center gap-2">
            <div class="mt-6 rounded-3xl bg-white max-w-[600px] max-h-[300px] grow w-full overflow-hidden">
                <img src={image2} alt="Profile Picture" class="w-full h-full object-fill" />
            </div>

            <div class="relative -translate-y-[20px] rounded-full bg-[#439cfb] max-w-[600px] max-h-[70px] w-full 
            font-bold text-white flex justify-center items-center text-xl"> 
                0 Question
            </div>

            <div class="relative rounded-xl bg-[#439cfb] max-w-[600px] max-h-[80px] w-full font-bold 
            text-white flex justify-center items-center text-xl text-center flex-col"> 
                <span className="text-ellipsis overflow-hidden">
                    Title: AWOOGA BOOBIES
                </span> 
                <span>
                    Author: Zoro
                </span>
                <span>
                    ID: #727
                </span>
            </div>
            
            <div class="relative bg-[#FFF4F4] max-w-[500px] max-h-[250px] grow w-full justify-center items-center text-xl pl-5 ">
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