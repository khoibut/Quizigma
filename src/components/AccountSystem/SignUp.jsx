import Title from "../LandingPage/Title"
import { NavLink } from "react-router"
import '../../assets/styles/App.css'
import { useState } from "react"
import { useRef } from "react"
import axios from "axios"
import Modal from "react-modal"


function SignUp() {
    // const axios = require('axios').default
    // const [user, setUser] = useState({})
    let usernameInput = useRef()
    let emailInput = useRef()
    let passwordInput = useRef()
    let repasswordInput = useRef()
    let usernameError = useRef()
    let emailError = useRef()
    let passwordError = useRef()
    let repasswordError = useRef()
    let lengthError = useRef()
    let numberError = useRef()
    let lowerError = useRef()
    let upperError = useRef()
    let specialError = useRef()
    
    function addAccount() {
        let flag = true
        let passwordFlag = true
        const user = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }

        // password check
        if(user.password.length < 8 || user.password === '') {
            lengthError.style.display = 'block'
            passwordFlag = false
        }
        else {
            lengthError.style.display = 'none'
        }

        if(user.password == user.password.toLowerCase() || user.password === '') {
            upperError.style.display = 'block'
            passwordFlag = false
        }
        else {
            upperError.style.display = 'none'
        }
        
        if(user.password == user.password.toUpperCase() || user.password === '') {
            lowerError.style.display = 'block'
            passwordFlag = false
        }
        else {
            lowerError.style.display = 'none'
        }

        if(user.password.split('').every(char => {return (char >= '0' && char <= '9') ? false : true}) || user.password === '') {
            numberError.style.display = 'block'
            passwordFlag = false
        }
        else {
            numberError.style.display = 'none'
        }

        if(!(user.password.includes('$') || user.password.includes('&') || user.password.includes('%') || user.password.includes('!') || user.password.includes('@') || user.password.includes('?')) || user.password === '') {
            specialError.style.display = 'block'
            passwordFlag = false
        }
        else {
            specialError.style.display = 'none'
        }
        //if theres wrong display
        if(passwordFlag) {
            passwordError.style.display = 'none'
        }
        else {
            passwordError.style.display = 'block'
            flag = false
        }

        // check confirm password
        if(repasswordInput.value !== user.password) {
            repasswordError.style.display = "flex"
            flag = false
        }
        else {
            repasswordError.style.display = "none"
        }

        if(flag) {
            axios.post('https://quizigmaapi.onrender.com/api/v1/acc', user)
            .then(function (response) {
                console.log(response);
                alert(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <>
            <Title />
            <div class="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg mt-5">
                <div class="self-start text-2xl font-extrabold m-10 mb-2     text-white">SIGN UP</div>
                <div class="flex flex-col w-3/5 lg:w-1/2 m-2">
                    <label class="mt-2 text-xl" for="username">Username</label>
                    <input ref={(current) => (usernameInput = current)} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="username" name="username" placeholder="Enter your username" />
                    <div ref={(current) => (usernameError = current)} class="text-rose-500 font-bold hidden mt-1 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Username had already been taken</span>
                    </div>
        
                    <label class="mt-2 text-xl" for="email">Email</label>
                    <input ref={(current) => (emailInput = current)} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="email" name="email" placeholder="Enter your email" />
                    <div ref={(current) => (emailError = current)} class="text-rose-500 font-bold hidden mt-1 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Email has already been taken</span>
                    </div>
                    
                    <label class="mt-2 text-xl" for="password">Password</label>
                    <input ref={(current) => (passwordInput = current)} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="password" name="password" placeholder="Enter your password" />
                    <div ref={(current) => (passwordError = current)} class="text-rose-500 font-bold mt-1 hidden">
                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            <span>Warning: Password must contain</span>
                        </div>
                        <div ref={(current) => (lengthError = current)} class="hidden">• At least 8 characters long</div>
                        <div ref={(current) => (numberError = current)} class="hidden">• A number</div>
                        <div ref={(current) => (lowerError = current)} class="hidden">• A lowecase letter</div>
                        <div ref={(current) => (upperError = current)} class="hidden">• A uppercase letter</div>
                        <div ref={(current) => (specialError = current)} class="hidden">• A specialize letter [$&%!@?]</div>
                    </div>
                    
                    <label class="mt-2 text-xl" for="repassword">Re-enter password</label>
                    <input ref={(current) => (repasswordInput = current)} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="repassword" name="repassword" placeholder="Confirm your password" />
                    <div ref={(current) => (repasswordError = current)} class="text-rose-500 font-bold hidden mt-1 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Password must match</span>
                    </div>
        
                    <button class="mt-5 self-end px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" onClick={addAccount}>Continue</button>
                </div>
        
                <div class="font-semibold my-3 text-sm lg:mx-20 text-center sm:text-lg">
                    By creating an account, you agree to Quizigma's <a href="https://www.youtube.com/watch?v=R_RAWjqdgTs" target="_blank" class="underline text-yellow-300">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=U_qZtLu52nM" target="_blank" class="underline text-yellow-300">Privacy Notice.</a>
                </div>
            </div>
        
            <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4">
                <div class="w-full bg-blue-300 h-2"></div>
                <div class="font-bold md:text-xl w-fit text-nowrap">Already have an account?</div>
                <div class="w-full bg-blue-300 h-2"></div>
            </div>

            <NavLink to="/signin" end >
                <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4 p-5     lg:p-10 rounded-b-lg bg-blue-300 hover:bg-sky-500">
                    <button class="font-extrabold text-white text-lg">SIGN IN HERE</button>
                </div>
            </NavLink>
        </>
    )
}
export default SignUp