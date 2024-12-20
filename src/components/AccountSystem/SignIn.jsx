import Title from "../LandingPage/Title"
import { NavLink } from "react-router"

// main account form
function SignIn() {
    return (
        <>
            <Title />
            <div class="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg mt-10">
                <div class="self-start text-2xl font-extrabold m-10 text-white">SIGN IN</div>
                <form action="" class="flex flex-col w-3/5 lg:w-1/2 m-2">
                    <label class="mt-2 text-xl" for="email">Email</label>
                    <input class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="email" name="email" placeholder="Enter your email" />
                    
                    <label class="mt-2 text-xl" for="password">Password</label>
                    <input class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="password" name="password" placeholder="Enter your password" />

                    <input class="mt-5 self-end px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" type="submit" value="Continue" />
                </form>

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