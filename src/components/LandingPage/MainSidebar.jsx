import OnlineIcon from '../../assets/images/OnlineIcon.png'
import PlayIcon from '../../assets/images/PlayIcon.png'
import AccountForm from '../AccountSystem/SignIn.jsx'
import { NavLink } from "react-router"
import '../../assets/styles/App.css'

function MainSidebar() {
    return (
        <>
            <div class="bg-white w-fit space-y-10 ">
                <NavLink to="/signin" end>
                    <button class="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-none ease-in duration-200 text-2xl border-[5px] border-[#EF0028] w-[240px] h-[60px] flex flex-col justify-center items-center mr-[92.5px] ml-[92.5px] mt-[15px]">Sign in</button>
                </NavLink>
                <br></br>
                <NavLink to="/signup" end>
                    <button class="rounded-full bg-[#FF6663] font-bold text-white hover:bg-rose-700 hover:border-none ease-in duration-200 text-2xl border-[5px] border-[#EF0028] w-[240px] h-[60px] flex flex-col justify-center items-center mr-[92.5px] ml-[92.5px]">Sign up</button>
                </NavLink>
        
                <div class="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] w-full h-[160px] flex justify-center mb-auto">
                    <div>
                        <button class="rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in duration-200 text-xl inline-block w-[140px] h-[75px] mr-[20px]">
                            <div>
                                <img src={OnlineIcon} alt="Icon" class="w-20 h-20 inline-block" />
                                <span class="absolute text-xl text-white -ml-10 mt-5">Online</span>
                            </div>
                        </button>
                        <button class="rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in duration-200 text-xl w-[140px] h-[75px] ml-[20px]">
                            <div>
                                <img src={PlayIcon} alt="Icon" class="w-20 h-20 inline-block" />
                                <span>Play</span>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center font-bold text-3xl">
                    <button class="bg-white hover:bg-gray-600 hover:text-white duration-200 rounded-full pr-[20px] pl-[20px] pt-[2px] pb-[2px]">
                        Settings
                    </button>
                </div>
            </div>
        </>
    )
}
export default MainSidebar