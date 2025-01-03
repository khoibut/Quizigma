import OnlineIcon from "./Icons&Images/OnlineIcon.png"
import PlayIcon from "./Icons&Images/Play icon.png"
import DiscoveryIcon from "./Icons&Images/DiscoveryIcon.png"
import LibraryIcon from "./Icons&Images/LibraryIcon.png"
import AddIcon from "./Icons&Images/AddIcon.png"
import { NavLink } from "react-router";

function SideBar(){
    return(
        <>
                <div class="bg-white max-w-[420px] grow shrink flex-2">
                    <div class="max-w-[420px] max-h-[300px] grow  min-w-[100px] min-h-[150px] shrink flex items-center justify-center gap-5 flex-wrap">
                        <div class="rounded-full bg-white border-[5px] border-teal-500
                        w-[100px] h-[100px] mt-5"></div>
                        <div class="rounded-r-xl bg-teal-500 max-w-[250px]
                        max-h-[200px] grow mb-6 flex justify-center items-center 
                        font-bold flex-wrap">
                            Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff Sr
                        </div>
                    </div>

                    <div class="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] max-w-[410px] min-h-[260px]
                    shrink grow flex justify-evenly content-evenly flex-wrap mt-5">
                        <div class="flex flex-wrap justify-evenly grow">
                            <button class="relative rounded-full bg-sky-900 font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                            m-[1px]">
                                <img src={DiscoveryIcon} alt="Discovery Icon" class="w-10 h-10 mb-1"/>
                                <span class="text-sm">Discovery</span>
                            </button>

                            <NavLink to='blank_page' end>    
                                <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center hover:animate-bounce
                                m-[1px]">
                                    <img src={LibraryIcon} alt="Online Icon" class="w-10 h-10 mb-1"/>
                                    <span class="text-sm">Library</span>
                                </button>
                            </NavLink>
                        </div>
                        
                        <div class="flex flex-wrap justify-evenly grow">
                            <NavLink to='blank_page' end>
                                <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center justify-center hover:animate-bounce
                                m-[1px]">
                                    <img src={OnlineIcon} alt="Online Icon" class="w-10 h-10 mb-1"/>
                                    <span class="text-sm">Online</span>
                                </button>
                            </NavLink>
                            
                            <NavLink to='/join' end>
                                <button class="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center justify-center hover:animate-bounce
                                m-[1px]">
                                    <img src={PlayIcon} alt="Play Icon" class="w-10 h-10 mb-1"/>
                                    <span class="text-sm">Play</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div class="flex flex-wrap mt-[80px]">
                        <div class="bg-[#006B2D] w-[80px] h-[80px] flex justify-center items-center">
                            <img src={AddIcon} alt="Add Icon" class="w-[50px] h-[50px]" />
                        </div>
                        <NavLink to='/addquiz' end>
                            <button class="bg-[#21DC6F] h-[80px] max-w-[270px] grow min-w-[140px] 
                            rounded-r-full flex justify-center items-center 
                            hover:border-green-300 hover:border-r-[15px] hover:border-t-[15px]
                            hover:border-b-[15px] hover:min-w-[300px] text-2xl hover:text-3xl">
                                <div class="font-bold text-white">Add</div>
                            </button>
                        </NavLink>
                    </div>

                    <NavLink to='blank_page' end>
                            <div class="flex w-full text-3xl mt-[75px] ">
                                <button id="settings" class="bg-white hover:bg-gray-400 hover:text-white ease-in duration-100
                                min-w-[100px] min-h-[60px] shrink max-w-full max-h-[75px] grow font-bold m-[1px]">
                                    Settings
                                </button>
                            </div>
                    </NavLink>
                </div>
        </>
    )
}
export default SideBar