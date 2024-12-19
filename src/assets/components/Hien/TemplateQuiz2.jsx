import image2 from "./image2.jpg"

function TemplateQuiz1(){
    return(
        <div class="bg-sky-500 rounded-3xl max-w-[800px] h-[900px] grow min-w-[200px] mr-[50px] ml-[50px] shrink 
        flex flex-col flex-wrap items-center gap-5">
            <div class="mt-6 rounded-3xl bg-white max-w-[600px] max-h-[300px] grow w-full overflow-hidden">
                <img src={image2} alt="zoro-kun" class="w-full h-full object-fill" />
            </div>

            <div class="relative -translate-y-[20px] rounded-full bg-cyan-800 max-w-[600px] max-h-[70px] w-full 
            border-purple-900 border-2 font-bold text-white flex justify-center items-center text-xl"> 
                999 Questions
            </div>

            <div class="relative rounded-full bg-cyan-800 max-w-[600px] max-h-[80px] w-full font-bold 
            text-white flex justify-center items-center text-xl"> 
                Title: Gyatt 
                <br /> 
                Author: Luffy
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
                <button class="text-white font-bold rounded-r-full relative bg-teal-400 max-w-[200px]
                 max-h-[70px] h-full w-full justify-center items-center flex justify-center hover:scale-110 
                 transition-transform duration-300 ease-out" > 
                    HOST
                </button>   
            </div>
        </div>


    )
}
export default TemplateQuiz1