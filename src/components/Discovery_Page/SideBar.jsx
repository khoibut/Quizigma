import OnlineIcon from "../Icons&Images/OnlineIcon.png"
import PlayIcon from "../Icons&Images/Play icon.png"
import DiscoveryIcon from "../Icons&Images/DiscoveryIcon.png"
import LibraryIcon from "../Icons&Images/LibraryIcon.png"
import AddIcon from "../Icons&Images/AddIcon.png"
import { NavLink, useLocation } from "react-router";
import React, { useState } from "react";

function SideBar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();

    return(
        <>
            <button onClick={toggleSidebar} className="md:hidden bg-gray-700 text-white p-2 rounded z-50">
                {isOpen ? "Menu" : "Close"}
            </button>

            <div className={`left-0 h-full md:w-[45vh] w-[35vh] bg-white text-black transform transition-transform duration-300 ease-in-out z-40 overflow-x-hidden overflow-y-auto 
            ${isOpen ? "animate-shrinkLeft" : "animate-openLeft"}`}>

                <div className="bg-white max-w-[420px] grow shrink flex-2">
                    <div className="max-w-[420px] max-h-[300px] grow min-w-[100px] min-h-[150px] shrink flex items-center justify-center flex-wrap">
                        <div className="rounded-full bg-gray-200 border-[5px] border-teal-700 w-[20vh] h-[20vh] mt-1 flex justify-center items-center overflow-hidden">
                        </div>
                        <div className="rounded-r-2xl bg-teal-500 md:w-[15vh] max-h-[20vh] grow mb-2 flex justify-center items-center 
                        font-bold flex-wrap p-2 mt-2">
                            {localStorage.getItem('username')}
                        </div>
                    </div>

                    <div className="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] max-w-[410px] min-h-[260px]
                    shrink grow flex justify-evenly content-evenly flex-wrap mt-5 border-r border-l">
                        <div className="flex flex-wrap justify-evenly grow">
                            <NavLink to='../discovery' end>
                                <button className={`relative rounded-full font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                                m-[1px] ${location.pathname === '/discovery'? 'bg-sky-900' : 'bg-[#487FA7] md:hover:animate-bounce md:hover:bg-sky-500 md:hover:shadow-none ease-in duration-200'}`}>
                                    <img src={DiscoveryIcon} alt="Discovery Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Discovery</span>
                                </button>
                            </NavLink>

                            <NavLink to='/library' end>    
                                <button className={`relative rounded-full shadow-xl font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                                m-[1px] ${location.pathname === '/library'? 'bg-sky-900' : 'bg-[#487FA7] md:hover:animate-bounce md:hover:bg-sky-500 md:hover:shadow-none ease-in duration-200'}`}>
                                    <img src={LibraryIcon} alt="Online Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Library</span>
                                </button>
                            </NavLink>
                        </div>
                        
                        <div className="flex flex-wrap justify-evenly grow">
                            <NavLink to='blank_page' end>
                                <button className={`relative rounded-full shadow-xl font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                                m-[1px] ${location.pathname === '/online'? 'bg-sky-900' : 'bg-[#487FA7] md:hover:animate-bounce md:hover:bg-sky-500 md:hover:shadow-none ease-in duration-200'}`}>
                                    <img src={OnlineIcon} alt="Online Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Online</span>
                                </button>
                            </NavLink>
                            
                            <NavLink to='/join' end>
                                <button className={`relative rounded-full shadow-xl font-bold text-white text-base w-[140px] h-[65px] flex flex-col items-center
                                m-[1px] bg-[#487FA7] md:hover:animate-bounce md:hover:bg-sky-500 md:hover:shadow-none ease-in duration-200`}>
                                    <img src={PlayIcon} alt="Play Icon" className="w-10 h-10 mb-1"/>
                                    <span className="text-sm">Play</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:mt-[50px] mt-2">
                        <div className="bg-[#006B2D] w-[80px] h-[80px] flex justify-center items-center">
                            <img src={AddIcon} alt="Add Icon" className="w-[50px] h-[50px]" />
                        </div>
                        <NavLink to='/addquiz' end>
                            <button className="bg-[#21DC6F] h-[80px] w-[140px] 
                            rounded-r-full flex justify-center items-center 
                             text-2xl transition ease-in duration-500">
                                <div className="font-bold text-white">New Quiz</div>
                            </button>
                        </NavLink>
                    </div>

                    <NavLink to='blank_page' end>
                            <div className="flex w-full text-3xl md:mt-[20px] mt-5">
                                <button id="settings" class="bg-white hover:bg-gray-400 hover:text-white ease-in-out duration-300
                                min-w-[100px] min-h-[60px] shrink max-w-full max-h-[75px] grow font-bold ">
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