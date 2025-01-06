import OnlineIcon from "../Icons&Images/OnlineIcon.png"
import PlayIcon from "../Icons&Images/Play icon.png"
import DiscoveryIcon from "../Icons&Images/DiscoveryIcon.png"
import LibraryIcon from "../Icons&Images/LibraryIcon.png"
import AddIcon from "../Icons&Images/AddIcon.png"
import { NavLink } from "react-router";
import React, { useState } from "react";

function SideBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <button onClick={toggleSidebar} className="md:hidden bg-gray-700 text-white p-2 rounded z-50">
                {isOpen ? "Menu" : "Close"}
            </button>

            <div className={`left-0 h-full md:w-1/5 w-[35vh] bg-white text-black transform transition-transform duration-300 ease-in-out z-40 overflow-x-hidden overflow-y-auto 
            ${isOpen ? "animate-shrinkLeft" : "animate-openLeft"}`}>

                <div className="bg-white max-w-[420px] grow shrink flex-2">
                    <div className="max-w-[420px] max-h-[300px] grow min-w-[100px] min-h-[150px] shrink flex items-center justify-center flex-wrap space-x-2">
                        <div className="rounded-full bg-gray-200 border-[5px] border-teal-700 w-[100px] h-[100px] mt-5"></div>
                        <div className="rounded-r-2xl bg-teal-500 max-w-[250px] max-h-[200px] grow mb-6 flex justify-center items-center 
                        font-bold flex-wrap p-2 mt-10">
                            Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff Sr
                        </div>
                    </div>

                    <div className="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] max-w-[410px] min-h-[260px]
                    shrink grow flex justify-evenly content-evenly flex-wrap mt-5 border-r border-l">
                        <div className="flex flex-wrap justify-evenly grow">
                            <NavLink to='../discovery' end>
                                <button className="relative rounded-full bg-sky-900 font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                                m-[1px]">
                                    <img src={DiscoveryIcon} alt="Discovery Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Discovery</span>
                                </button>
                            </NavLink>

                            <NavLink to='blank_page' end>    
                                <button className="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center hover:animate-bounce
                                m-[1px]">
                                    <img src={LibraryIcon} alt="Online Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Library</span>
                                </button>
                            </NavLink>
                        </div>
                        
                        <div className="flex flex-wrap justify-evenly grow">
                            <NavLink to='blank_page' end>
                                <button className="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center justify-center hover:animate-bounce
                                m-[1px]">
                                    <img src={OnlineIcon} alt="Online Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Online</span>
                                </button>
                            </NavLink>
                            
                            <NavLink to='/join' end>
                                <button className="relative rounded-full shadow-xl bg-[#487FA7] font-bold text-white hover:bg-sky-500 hover:shadow-none ease-in 
                                duration-200 text-base w-[140px] h-[65px] flex flex-col items-center justify-center hover:animate-bounce
                                m-[1px]">
                                    <img src={PlayIcon} alt="Play Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Play</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex flex-wrap mt-[80px]">
                        <div className="bg-[#006B2D] w-[80px] h-[80px] flex justify-center items-center">
                            <img src={AddIcon} alt="Add Icon" className="w-[50px] h-[50px]" />
                        </div>
                        <NavLink to='/addquiz' end>
                            <button className="bg-[#21DC6F] h-[80px] max-w-[270px] grow min-w-[140px] 
                            rounded-r-full flex justify-center items-center 
                            md:hover:border-emerald-700 md:hover:border-r-[15px] md:hover:border-t-[15px]
                            md:hover:border-b-[15px] md:hover:min-w-[250px] text-2xl hover:text-3xl transition ease-in duration-500">
                                <div className="font-bold text-white">New Quiz</div>
                            </button>
                        </NavLink>
                    </div>

                    <NavLink to='blank_page' end>
                            <div className="flex w-full text-3xl mt-[50px] ">
                                <button id="settings" class="bg-white hover:bg-gray-400 hover:text-white ease-in-out duration-300
                                min-w-[100px] min-h-[60px] shrink max-w-full max-h-[75px] grow font-bold m-[1px]">
                                    Settings
                                </button>
                            </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default SideBar