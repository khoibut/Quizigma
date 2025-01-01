import OnlineIcon from "./Icons&Images/OnlineIcon.png"
import PlayIcon from "./Icons&Images/Play icon.png"
import WelcomeToQizigma from "./Icons&Images/landingPageBg.png"

function LandingPage(){
    return(
        <>
            {/* top bar */}
            <div class="font-bold bg-[#338ACB] h-[60px] text-4xl pl-5 block flex w-full">
            Quizigma
            </div>

            {/* side bar + display bar */}
            <div class="flex w-full">
                <div class="bg-white w-[420px] h-screen space-y-10">
                    <button class="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-none 
                    ease-in duration-200 text-2xl block border-[5px] border-[#EF0028] w-[240px] h-[60px] flex flex-col 
                    justify-center items-center mr-[92.5px] ml-[92.5px] mt-[15px]">
                        Sign in
                    </button>
                    <button class="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-none 
                    ease-in duration-200 text-2xl block border-[5px] border-[#EF0028] w-[240px] h-[60px] flex flex-col 
                    justify-center items-center mr-[92.5px] ml-[92.5px]">
                        Sign up
                    </button>
                    
                    <div class="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] w-[410px] h-[160px] flex justify-center items-center">
                        <div>
                            <button class="rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                            duration-200 text-xl inline-block w-[140px] h-[75px] mr-[20px]">
                                <img src={OnlineIcon} alt="Online Icon" class="w-20 h-20 inline-block"/>
                                <span class="absolute text-xl text-white -ml-10 mt-5">Online</span>
                            </button>
                            <button class="rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                            duration-200 text-xl w-[140px] h-[75px] ml-[20px]">
                                <img src={PlayIcon} alt="Play Icon" class="w-20 h-20 inline-block"/>
                                Play
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center font-bold text-3xl pt-[410px]">
                        <button class="bg-white hover:bg-gray-600 hover:text-white duration-200 rounded-full pr-[20px] pl-[20px] pt-[2px] pb-[2px]">
                            Settings
                        </button>
                    </div>
                </div>
                <div class="flex grow justify-end">
                    <img src={WelcomeToQizigma} alt="Welcome to Quizigma" class="w-full"></img>
                </div>
            </div>
        </>
    )
}

export default LandingPage