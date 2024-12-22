import Title from "../LandingPage/Title"
import { NavLink } from "react-router"
import '../../assets/styles/App.css'
import { useState } from "react"
import axios from "axios"


function SignUp() {
    // const axios = require('axios').default
    const [user, setUser] = useState({})
    
    function addAccount() {
        
        axios.post('https://1e146b0b-03dd-4484-8c90-6ed84cfa86df.mock.pstmn.io/api/acc', {user})
        .then(function (token) {
            console.log(token); 
        })
    }

    return (
        <>
            <Title />
            <div class="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg mt-5">
                <div class="self-start text-2xl font-extrabold m-10 mb-2     text-white">SIGN UP</div>
                <div class="flex flex-col w-3/5 lg:w-1/2 m-2">
                    <label class="mt-2 text-xl" for="username">Username</label>
                    <input onChange={(current) => {setUser({username: current.target.value})}} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="username" name="username" placeholder="Enter your email" />
        
                    <label class="mt-2 text-xl" for="email">Email</label>
                    <input onChange={(current) => {setUser({email: current.target.value})}} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="email" name="email" placeholder="Enter your email" />
                    
                    <label class="mt-2 text-xl" for="password">Password</label>
                    <input onChange={(current) => {setUser({password: current.target.value})}} class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="password" name="password" placeholder="Enter your password" />
                    
                    <label class="mt-2 text-xl" for="repassword">Re-enter password</label>
                    <input class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="repassword" name="repassword" placeholder="Enter your password" />
        
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