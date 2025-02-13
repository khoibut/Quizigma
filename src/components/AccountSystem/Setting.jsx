import React, { useState } from 'react'
import { NavLink, useNavigate, useSubmit } from "react-router"
import axios from 'axios'

function AccountSetting() {
    const baseUrl = import.meta.env.VITE_API_URL
    const [open, setOpen] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [accountOption, setAccountOption] = useState()
    const navigate = useNavigate()
    let newUsername, newEmail, newPassword

    const renderContent = () => {
        switch (accountOption) {
            case 'chgUsername':
                return (
                    <>
                        <ul className={`transition-all grid w-full ${open ? 'grid-rows-[1fr] pb-6 pt-2 border-b border-slate-400' : 'grid-rows-[0fr]'}`}>
                            <div className='overflow-hidden flex flex-col gap-2 pl-6'>
                                <label for="small-input" className="block text-sm font-medium text-gray-900 dark:text-white">Enter new username</label>
                                <input ref={(e) => newUsername = e} type="text" placeholder="Your new username..." id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <li onClick={changeUsername} className='cursor-pointer text-center bg-blue-200 w-40 p-2 rounded-full hover:bg-violet-400 transition-all z-10'>Change username</li>
                                <li onClick={openAccountInfo} className='cursor-pointer text-center bg-red-400 w-28 p-1 rounded-full hover:bg-red-500 transition-all z-10 text-sm'>Cancel</li>
                            </div>
                        </ul>  
                    </>
                )
            case 'chgEmail':
                return (
                    <>
                        <ul className={`transition-all grid w-full ${open ? 'grid-rows-[1fr] pb-6 pt-2 border-b border-slate-400' : 'grid-rows-[0fr]'}`}>
                            <div className='overflow-hidden flex flex-col gap-2 pl-6'>
                                <label for="small-input" className="block text-sm font-medium text-gray-900 dark:text-white">Enter new Email</label>
                                <input ref={(e) => newEmail = e} type="text" placeholder="Your new email..." id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <li onClick={openChangeEmail} className='cursor-pointer text-center bg-blue-200 w-40 p-2 rounded-full hover:bg-violet-400 transition-all z-10'>Change email</li>
                                <li onClick={openAccountInfo} className='cursor-pointer text-center bg-red-400 w-28 p-1 rounded-full hover:bg-red-500 transition-all z-10 text-sm'>Cancel</li>
                            </div>
                        </ul>  
                    </>
                )
            case 'chgPassword':
                return (
                    <>
                        <ul className={`transition-all grid w-full ${open ? 'grid-rows-[1fr] pb-6 pt-2 border-b border-slate-400' : 'grid-rows-[0fr]'}`}>
                            <div className='overflow-hidden flex flex-col gap-2 pl-6'>
                                <label for="small-input" className="block text-sm font-medium text-gray-900 dark:text-white">Enter new Password</label>
                                <input ref={(e) => newPassword = e} type="text" placeholder="Your new password..." id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <li onClick={openChangeEmail} className='cursor-pointer text-center bg-blue-200 w-40 p-2 rounded-full hover:bg-violet-400 transition-all z-10'>Change password</li>
                                <li onClick={openAccountInfo} className='cursor-pointer text-center bg-red-400 w-28 p-1 rounded-full hover:bg-red-500 transition-all z-10 text-sm'>Cancel</li>
                            </div>
                        </ul>   
                    </>
                )
            default:
                return (
                    <>
                     <ul className={`transition-all grid w-full ${open ? 'grid-rows-[1fr] pb-6 pt-2 border-b border-slate-400' : 'grid-rows-[0fr]'}`}>
                            <div className='overflow-hidden flex flex-col gap-2 pl-6'>
                                <li><span className='text-black/70 font-semibold'>Username: </span><span>{localStorage.getItem('username')}</span></li>
                                <li><span className='text-black/70 font-semibold'>Email: </span><span>{localStorage.getItem('email')}</span></li>
                                <li onClick={openChgUsername} className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change username</li>
                                <li onClick={openChangeEmail} className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change email</li>
                                <li onClick={openChangePassword} className='cursor-pointer bg-blue-200 w-40 p-2 rounded-md hover:bg-violet-400 transition-all hover:scale-[105%] z-10'>Change password</li>
                            </div>
                        </ul>   
                    </>
                )
        }
    }
    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('email')

        navigate('/')
    }
    const deleteAccount = () => {
        if(confirm("You are about to delete this account permanently")) {
            // axios.post('https://quizigmaapi.onrender.com/api/v1/set', quiz, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((response) => {
            //     console.log(response)
            //     navigate('/library')
            // })
        }   
        else {
            setConfirmDelete(false)
        }
    }
    const openAccountInfo = () => {
        setOpen(false)
        setTimeout(() => {
            setAccountOption('')
            setOpen(true)
        }, 300);
    }
    const openChgUsername = () => {
        setOpen(false)
        setTimeout(() => {
            setAccountOption('chgUsername')
            setOpen(true)
        }, 300);
    }
    const openChangeEmail = () => {
        setOpen(false);
        setTimeout(() => {
            setAccountOption('chgEmail')
            setOpen(true);
        }, 300);
    }
    const openChangePassword = () => {
        setOpen(false);
        setTimeout(() => {
            setAccountOption('chgPassword')
            setOpen(true);
        }, 300);
    }
    
    const changeUsername = () => {
        axios.post(`${baseUrl}/api/v1/acc/auth`, {username: newUsername.value}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((response) => {
            console.log(response)
            openAccountInfo()
        })
    }
    const changeEmail = () => {
        axios.post(`${baseUrl}/api/v1/acc/auth`, {username: newEmail.value}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((response) => {
            console.log(response)
            openAccountInfo()
        })
    }
    const changePassword = () => {
        axios.post(`${baseUrl}/api/v1/acc/auth`, {username: newPassword.value}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((response) => {
            console.log(response)
            openAccountInfo()
        })
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
                        {renderContent()}
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
    let sidebar, content, sidebarBtn

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
        if(screen.width <= 640) {
            sidebar.style.transform = 'translateX(0)';
            sidebar.style.width = '100%';
            sidebar.style.padding = '1rem';
            content.style.display = 'none';
            sidebarBtn.style.display = 'none';
        }
    }
    const closeSierbar = () => {
        if(screen.width <= 640) {
            sidebar.style.transform = 'translateX(-100%)';
            sidebar.style.width = '0';
            sidebar.style.paddingLeft = '0';
            sidebar.style.paddingRight = '0';
            content.style.display = 'block';
            sidebarBtn.style.display = 'block';
        }
    }

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <div ref={(e) => {sidebar = e}} className="w-[280px] shrink-0 bg-white shadow-lg p-4 overflow-hidden flex flex-col justify-between transition-all max-sm:w-full">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Settings</h2>
                        <ul className='gap-2 flex flex-col'>
                            <li
                                className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'account' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                                onClick={() => {setSelectedOption('account'); closeSierbar()}}
                            >
                                Account & Privacy
                            </li>
                            <li
                                className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'setting' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                                onClick={() => {setSelectedOption('setting'); closeSierbar()}}
                            >
                                Setting
                            </li>
                            <li
                                className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'language' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                                onClick={() => {setSelectedOption('language'); closeSierbar()}}
                            >
                                Language
                            </li>
                            <li
                                className={`p-2 cursor-pointer rounded-sm transition-all ${selectedOption === 'theme' ? 'bg-blue-200 shadow-[0_3px_rgba(0,0,0,0.4)]' : 'hover:bg-slate-300'}`}
                                onClick={() => {setSelectedOption('theme'); closeSierbar()}}
                            >
                                Theme
                            </li>
                        </ul>
                    </div>
                    <NavLink to='/library' end> 
                        <button className="p-2 bg-red-500 text-white w-full rounded-lg hover:bg-red-700 transition-all uppercase font-semibold active:bg-orange-600">Exit</button>
                    </NavLink>
                </div>
                <button ref={(e) => sidebarBtn = e} onClick={openSidebar} className='bg-white h-fit rounded-r-lg self-center hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                </button>
                <div ref={(e) => content = e} className="w-full p-4 sm:ml-4 max-sm:hidden">
                    {renderContent()}
                </div>
            </div>
        </>
    )
}

export default Setting