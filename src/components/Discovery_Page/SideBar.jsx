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

            <div className={`left-0 h-full md:w-[42vh] w-[35vh] shrink-0 bg-white text-black transform transition-transform duration-300 ease-in-out z-40 overflow-x-hidden overflow-y-auto 
            ${isOpen ? "animate-shrinkLeft" : "animate-openLeft"}`}>

                <div className="bg-white max-w-[420px] grow shrink flex-2">
                    <div className="max-w-[420px] max-h-[300px] min-w-[100px] min-h-[150px] flex items-center justify-center overflow-hidden mx-2">
                        <div className="rounded-full relative z-20 bg-gray-200 border-[5px] border-teal-700 w-[15vh] h-[15vh] mt-1 flex justify-center items-center overflow-hidden">
                        </div>
                        <div className="rounded-r-2xl relative -left-1 z-10 bg-teal-500 md:w-[15vh] max-h-[20vh] grow mb-2 flex justify-center items-center 
                        font-bold flex-wrap p-2 mt-2">
                            {localStorage.getItem('username')}
                        </div>
                    </div>

                    <div className="bg-[#C6E3F1] items-center border-[8px] border-[#338ACB] max-w-[410px] min-h-[260px]
                    shrink grow flex justify-evenly content-evenly flex-wrap mt-5 border-r border-l overflow-hidden py-2">
                        <NavLink to='../discovery' end>
                            <button className={`relative shadow-xl font-bold text-white text-base w-[140px] h-[60px] inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden rounded-full
                            m-[1px] ${location.pathname === '/discovery'? 'bg-sky-900' : 'bg-[#487FA7] transition duration-300 ease-out border-2 border-slate-500 bg-[#487FA7]/80 group'}`}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#487FA7] group-hover:translate-x-0 ease">
                                    <img src={DiscoveryIcon} alt="Discovery Icon" className="w-10 h-10"/>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Discovery</span>
                                <span class="relative invisible">Button Text</span>
                            </button>
                        </NavLink>

                        <NavLink to='/library' end>    
                            <button className={`relative shadow-xl font-bold text-white text-base w-[140px] h-[60px] inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden rounded-full
                            m-[1px] ${location.pathname === '/library'? 'bg-sky-900' : 'bg-[#487FA7] transition duration-300 ease-out border-2 border-slate-500 bg-[#487FA7]/80 group'}`}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#487FA7] group-hover:translate-x-0 ease">
                                    <img src={LibraryIcon} alt="Online Icon" className="w-10 h-10"/>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Library</span>
                                <span class="relative invisible">Button Text</span>
                            </button>
                        </NavLink>
                        <NavLink to='blank_page' end>
                            <button className={`relative shadow-xl font-bold text-white text-base w-[140px] h-[60px] inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden rounded-full
                            m-[1px] ${location.pathname === '/online'? 'bg-sky-900' : 'bg-[#487FA7] transition duration-300 ease-out border-2 border-slate-500 bg-[#487FA7]/80 group'}`}>
                                
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#487FA7] group-hover:translate-x-0 ease">
                                    <img src={OnlineIcon} alt="Online Icon" className="w-10 h-10"/>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Online</span>
                                <span class="relative invisible">Button Text</span>
                            </button>
                        </NavLink>
                        <NavLink to='/join' end>
                            <button className={`relative shadow-xl font-bold text-white text-base w-[140px] h-[60px]  
                            m-[1px] bg-[#487FA7] rounded-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition duration-300 ease-out border-2 border-slate-500 bg-[#487FA7]/80 group`}>
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#487FA7] group-hover:translate-x-0 ease">
                                    <img src={PlayIcon} alt="Play Icon" className="w-10 h-10"/>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Play</span>
                                <span class="relative invisible">Button Text</span>
                            </button>
                        </NavLink>
                    </div>

                    <div className="flex md:mt-[50px] mt-2 overflow-hidden group">
                        <div className="bg-[#006B2D] w-[80px] h-[80px] flex justify-center items-center">
                            <img src={AddIcon} alt="Add Icon" className="w-[50px] h-[50px] group group-hover:animate-spin" />
                        </div>
                        <NavLink to='/addquiz' end>
                            <button className="bg-[#21DC6F] h-[80px] w-[140px] 
                            rounded-r-full flex justify-center items-center 
                             text-2xl transition ease-in duration-500 group group-hover:bg-[#46c179]">
                                <div className="font-bold text-white">New Quiz</div>
                            </button>
                        </NavLink>
                    </div>

                    <NavLink to='/setting' end>
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