import React, { useState } from 'react'
import { NavLink, useNavigate, useSubmit } from "react-router"

function AccountSetting() {
    const [open, setOpen] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')

        navigate('/')
    }
    const deleteAccount = () => {
        if(confirm("You are about to delete this account permanently")) {
            alert('deleted')
        }   
        else {
            setConfirmDelete(false)
        }
    }

    return (
        <>
            <div>
                <h3 className="font-semibold w-full text-center border-b border-slate-400 pb-2 mb-4">Account and Privacy</h3>
                <ul>
                    <li className="mt-2">
                        <button onClick={() => {setOpen(!open)}} className='bg-[#8dd0d1] w-full rounded-lg p-2 pl-4 flex justify-between items-center hover:bg-[#92c6c8]'>
                            <span>Account Information</span>
                            <svg className={`transition-transform ${open ? 'rotate-180' : ''} `} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                        </button>
                        <ul className={`transition-all grid w-full ${open ? 'grid-rows-[1fr] pb-6 pt-2 border-b border-slate-400' : 'grid-rows-[0fr]'}`}>
                            <div className='overflow-hidden flex flex-col gap-2 pl-6'>
                                <li><span className='text-black/70 font-semibold'>Username: </span><span>{localStorage.getItem('username')}</span></li>
                                <li>Email:</li>
                                <li className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change username</li>
                                <li className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change email</li>
                                <li className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change password</li>
                            </div>
                        </ul>
                    </li>
                    <li className="mt-2">
                        <button className='bg-[#8dd0d1] w-full rounded-lg p-2 pl-4 flex justify-between items-center hover:bg-[#92c6c8]'>Notification</button>
                    </li>
                    <li className="mt-2">
                        <button onClick={logOut} className='bg-[#e43d34] w-52 font-semibold text-gray-200 rounded-lg p-2 pl-4 flex justify-between items-center hover:bg-[#b93d37] group hover:text-white'>
                            Log out
                            <svg className='group group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(229 231 235)"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg> 
                        </button>
                    </li>
                    <li className="mt-2">
                        <button onClick={() => {setConfirmDelete(true)}} className={`bg-[#e43d34] w-52 font-semibold text-gray-200 rounded-lg p-2 pl-4 flex justify-between items-center hover:bg-[#b93d37] group hover:text-white ${confirmDelete ? 'hidden' : ''}`}>
                            Delete Account
                            <svg className='group group-hover:fill-white' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(229 231 235)"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>
                        </button>
                        <div className={`pl-2 border border-[#c92a2a] p-4 w-fit rounded-lg ${confirmDelete ? '' : 'hidden'}`}>
                            <div className='text-[#c92a2a] italic underline font-medium'>By pressing confirm your account will be permanently deleted.</div>
                            <button className="bg-green-500 rounded-md w-20 p-1 mr-2 mt-2 hover:bg-green-700 hover:text-white    transition-colors" onClick={deleteAccount}>Confirm</button>
                            <button className="bg-red-500 rounded-md w-20 p-1 mr-2 mt-2 hover:bg-red-700 hover:text-white    transition-colors" onClick={() => {setConfirmDelete(false)}}>Cancel</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
function LanguageSetting() {
    return (
        <>
            <div>
                <h3 className="font-semibold w-full text-center border-b border-slate-400 pb-2">Language</h3>
                 <ul>
                    <li>
                        <div>English</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Japanese</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Russian</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Vietnamese</div>
                    </li>
                 </ul>
            </div>
        </>
    )
}
function OtherSetting() {
    return (
        <>
            <div>
                <h3 className="font-semibold w-full text-center border-b border-slate-400 pb-2">More settings</h3>
                 <ul>
                    <li>
                        <div>Account Information</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Notification</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Delete Account</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Log out</div>
                    </li>
                 </ul>
            </div>
        </>
    )
}
function ThemeSetting() {
    return (
        <>
            <div>
                <h3 className="font-semibold w-full text-center border-b border-slate-400 pb-2">Theme</h3>
                 <ul>
                    <li>
                        <div>Account Information</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Notification</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Delete Account</div>
                    </li>
                 </ul>
                 <ul>
                    <li>
                        <div>Log out</div>
                    </li>
                 </ul>
            </div>
        </>
    )
}

function Setting() {
    const [selectedOption, setSelectedOption] = useState('account')
    let sidebar

    const renderContent = () => {
        switch (selectedOption) {
            case 'account':
                return <AccountSetting />
            case 'language':
                return <LanguageSetting />
            case 'theme':
                return <ThemeSetting />
            case 'setting':
                return <OtherSetting />
            default:
                return <div>Select an option from the sidebar</div>
        }
    }
    const openSidebar = () => {
        sidebar.style.transform = 'translateX(0)';
        sidebar.style.width = '280px';
        sidebar.style.padding = '1rem';
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div ref={(e) => {sidebar = e}} className="w-[280px] shrink-0 bg-white shadow-lg p-4 overflow-hidden flex flex-col justify-between transition-all">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Settings</h2>
                    <ul className='gap-2 flex flex-col'>
                        <li
                            className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'account' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                            onClick={() => {setSelectedOption('account'); sidebar.style.transform = 'translateX(-100%)'; sidebar.style.width = '0'; sidebar.style.paddingLeft = '0'; sidebar.style.paddingRight = '0'}}
                        >
                            Account & Privacy
                        </li>
                        <li
                            className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'setting' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                            onClick={() => {setSelectedOption('setting'); sidebar.style.transform = 'translateX(-100%)'; sidebar.style.width = '0'; sidebar.style.paddingLeft = '0'; sidebar.style.paddingRight = '0'}}
                        >
                            Setting
                        </li>
                        <li
                            className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'language' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                            onClick={() => {setSelectedOption('language'); sidebar.style.transform = 'translateX(-100%)'; sidebar.style.width = '0'; sidebar.style.paddingLeft = '0'; sidebar.style.paddingRight = '0'}}
                        >
                            Language
                        </li>
                        <li
                            className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'theme' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                            onClick={() => {setSelectedOption('theme'); sidebar.style.transform = 'translateX(-100%)'; sidebar.style.width = '0'; sidebar.style.paddingLeft = '0'; sidebar.style.paddingRight = '0'}}
                        >
                            Theme
                        </li>
                    </ul>
                </div>
                <NavLink to='/library' end> 
                    <button className="p-2 bg-red-500 text-white w-full rounded-lg hover:bg-red-700 transition-all uppercase font-semibold active:bg-orange-600">Exit</button>
                </NavLink>
            </div>
            <button onClick={openSidebar} className='bg-white h-fit rounded-r-lg self-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
            </button>
            <div className="w-full p-4">
                {renderContent()}
            </div>
        </div>
    )
}

export default Setting