import Title from "../LandingPage/Title"
import { NavLink, useNavigate } from "react-router"
import { useState } from "react"
import { useRef } from "react"
import axios from "axios"

// main account form
function SignIn() {
    const baseUrl = import.meta.env.VITE_API_URL
    let username = useRef()
    let email = useRef()
    let password = useRef()
    let wrongEmailOrPasswordError
    let invalidEmailError
    //error pop up
    const navigate = useNavigate()

    function login() {
        let flag = true
        let user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        //check valid email
        if(!user.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            invalidEmailError.style.display = 'flex'
            flag = false
        }
        else {
            invalidEmailError.style.display = 'none'
        }

        if(flag) {
            axios.post(`${baseUrl}/api/v1/acc/auth`, user)
            .then(function(response) {
                wrongEmailOrPasswordError.style.display = 'none'
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('email', response.data.email)
                navigate("/library")
            })
            .catch(function(error) {
                if(error.response.data.error === "Invalid email or password") {
                    wrongEmailOrPasswordError.style.display = 'flex'
                }
            })
        }
    }

    return (
        <>
            <Title />
            <div className="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg mt-2">
                <div className="self-start text-2xl font-extrabold my-7 mx-5 sm:mx-10 text-white">SIGN IN</div>
                <div className="flex flex-col w-4/5 md:w-3/5 lg:w-1/2 m-2">
                    <label className="mt-2 text-xl" for="username">Username</label>
                    <input ref={(current) => (username = current)} className="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="username" name="username" placeholder="Enter your username" />

                    <label className="mt-2 text-xl" for="email">Email</label>
                    <input ref={(current) => (email= current)} className="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="email" name="email" placeholder="Enter your email" />
                    {/* email error pop up */}
                    <div ref={(current) => (invalidEmailError = current)} className="text-rose-500 font-bold hidden mt-1 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Invalid email</span>
                    </div>
                    
                    <label className="mt-2 text-xl" for="password">Password</label>
                    <input ref={(current) => (password= current)} className="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="password" name="password" placeholder="Enter your password" />
                    <div ref={(current) => (wrongEmailOrPasswordError = current)} className="text-rose-500 font-bold hidden mt-1 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Email or password incorrect</span>
                    </div>

                    <button onClick={login} className="mt-5 self-end px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >Continue</button>
                </div>

                <div className="font-semibold my-3 text-sm lg:mx-20 text-center sm:text-lg">
                    By continuing, you agree to Quizigma's <a href="https://www.youtube.com/watch?v=R_RAWjqdgTs" target="_blank" className="underline text-yellow-300">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=U_qZtLu52nM" target="_blank" className="underline text-yellow-300">Privacy Notice.</a>
                </div>
            </div>
            
            <div className="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4">
                <div className="w-full bg-blue-300 h-2"></div>
                <div className="font-bold text-xl w-fit text-nowrap">Don't have an account?</div>
                <div className="w-full bg-blue-300 h-2"></div>
            </div>
            
            <NavLink className="font-extrabold text-white text-lg" to="/signup" end>
            <div className="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4 p-5 lg:p-8 rounded-b-lg bg-blue-300 hover:bg-sky-500">
                    <button className="font-extrabold text-white text-lg">CREATE NEW ACCOUNT</button>
                </div>
            </NavLink>
        </>
    )
}
export default SignIn