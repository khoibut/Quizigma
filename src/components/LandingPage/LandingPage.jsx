// import OnlineIcon from '../../assets/images/OnlineIcon.png'
// import PlayIcon from '../../assets/images/PlayIcon.png'
import landingPageBg from '../../assets/images/landingPageBg.png'
import Title from './Title.jsx'
import MainSidebar from './MainSidebar.jsx'
// import '../../assets/styles/App.css'
// import AccountForm from '../AccountSystem/AccountForm.jsx' 
import AccountForm from '../AccountSystem/SignIn.jsx'
import { NavLink } from "react-router"
import '../../assets/styles/App.css'


function LandingPage() {
    if(localStorage.getItem("token")){
        window.location.href = "/library"
    }
    return (
        <>
            <Title />
            <div className="grid sm:grid-cols-[400px_1fr] min-h-screen">
                {/* sidebar */}
                <div className="flex flex-col gap-5 items-center py-4 pb-20">
                    <NavLink to="/signin" end>
                        <button className="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-white ease-in duration-200 text-2xl border-[5px] border-[#EF0028] py-2 px-4 min-w-fit w-[50%] flex flex-col justify-center items-center mt-[15px]">Sign in</button>
                    </NavLink>
                    <NavLink to="/signup" end>
                        <button className="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-white ease-in duration-200 text-2xl border-[5px] border-[#EF0028] py-2 px-4 min-w-fit w-[50%] flex flex-col justify-center items-center">Sign up</button>
                    </NavLink>
            
                    <div className="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] w-full h-[160px] grid grid-cols-2 gap-5 p-5">
                        <button className="h-[80%] rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in duration-200 text-xl inline-block">
                            <span>Online</span>
                        </button>
                        <button className="h-[80%] rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in duration-200 text-xl inline-block">
                                <span>Play</span>
                        </button>
                    </div>

                    <NavLink className="w-full" to='blank_page' end>
                        <div className="flex w-full text-3xl md:mt-[20px] mt-5">
                            <button id="settings" class="bg-white hover:bg-gray-400 hover:text-white ease-in-out duration-300
                            min-w-[100px] min-h-[60px] shrink max-w-full max-h-[75px] grow font-bold ">
                                Settings
                            </button>
                        </div>
                    </NavLink>
                </div>
                {/* landing paging card */}
                <img src={landingPageBg} alt="Welcome to Quizigma" className="object-cover h-full max-sm:hidden" />
            </div>
        </>
    )
}
export default LandingPage