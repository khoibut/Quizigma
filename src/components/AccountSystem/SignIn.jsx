import Title from "../LandingPage/Title"
import { NavLink } from "react-router"
import { useState } from "react"
import axios from "axios"

// main account form
function SignIn() {
    const [user, setUser] = useState({})
    let error

    function login() {
        axios.get()
    }

    return (
        <>
            <Title />
            <div class="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg mt-10">
                <div class="self-start text-2xl font-extrabold m-10 text-white">SIGN IN</div>
                <div class="flex flex-col w-3/5 lg:w-1/2 m-2">
                    <label class="mt-2 text-xl" for="email">Email</label>
                    <input onChange={(current) => (setUser({email: current.target.value}))} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="email" name="email" placeholder="Enter your email" />
                    
                    <label class="mt-2 text-xl" for="password">Password</label>
                    <input onChange={(current) => (setUser({password: current.target.value}))} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="password" name="password" placeholder="Enter your password" />
                    <div ref={(current) => (error = current)} class="text-rose-500 font-bold hidden mt-5 gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="rgb(244, 63, 94)"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        <span>Email or password incorrect</span>
                    </div>

                    <button onClick={login} class="mt-5 self-end px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" >Continue</button>
                </div>

                <div class="font-semibold my-3 text-sm lg:mx-20 text-center sm:text-lg">
                    By continuing, you agree to Quizigma's <a href="https://www.youtube.com/watch?v=R_RAWjqdgTs" target="_blank" class="underline text-yellow-300">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=U_qZtLu52nM" target="_blank" class="underline text-yellow-300">Privacy Notice.</a>
                </div>
            </div>

            <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4">
                <div class="w-full bg-blue-300 h-2"></div>
                <div class="font-bold text-xl w-fit text-nowrap">Don't have an account?</div>
                <div class="w-full bg-blue-300 h-2"></div>
            </div>
            
            <NavLink class="font-extrabold text-white text-lg" to="/signup" end>
                <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4 p-5 lg:p-10 rounded-b-lg bg-blue-300 hover:bg-sky-500">
                    <button class="font-extrabold text-white text-lg">CREATE NEW ACCOUNT</button>
                </div>
            </NavLink>
        </>
    )
}
export default SignIn