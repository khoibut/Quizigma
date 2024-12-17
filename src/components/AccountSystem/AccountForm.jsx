// account inputs
function AccountInput( {value} ) {
    const textVal = value
    const placeholder = "Enter your " + textVal
    
    return (
        <>
            <label class="mt-2 text-xl uppercase font-semibold" for="{value}">{value}</label>
            <input class="rounded-md p-3 outline-none hover:outline-blue-950 hover:outline-offset-2" type="text" id="{value}" name="{value}" placeholder={placeholder}></input>
        </>
    )
}

// dont have an account or already have an account display
function AccountBottomButton( {value} ) {
    let text1 = "Don't have an account?"
    let text2 = "CREATE NEW ACCOUNT"
    if(value === "SIGN IN") {
        text1 = "Already have an account?"
        text2 = "SIGN IN HERE"
    }

    return (
        <>
            <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4">
                <div class="w-full bg-blue-300 h-2"></div>
                <div class="font-bold text-xl w-fit text-nowrap">{text1}</div>
                <div class="w-full bg-blue-300 h-2"></div>
            </div>

            <div class="flex justify-center items-center gap-5 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto my-4 p-5 lg:p-10 rounded-b-lg bg-blue-300 hover:bg-sky-500">
                <button class="font-extrabold text-white text-lg">{text2}</button>
            </div>
        </>
    )
}

// send form to database
function sendAccount() {

}

// main account form
function AccountForm( {value, inputs} ) {
    let formCondition = "creating an account"
    const formValue = value
    if(formValue === 'SIGN IN')
        formCondition = "continuing"

    return (
        <>
            <div class="flex justify-center items-center flex-col bg-blue-300 w-full lg:w-2/3 xl:w-1/2 inset-0 m-auto rounded-t-lg">
                <div class="self-start text-2xl font-extrabold m-10 text-white">{value}</div>
                <form action="POST" class="flex flex-col w-3/5 lg:w-1/2 m-2" onSubmit={sendAccount()}>
                    {inputs.map((value) => {
                        return (
                            <>
                                <AccountInput value={value} />
                            </>
                        )
                    })}

                    <input class="mt-5 self-end px-10 py-2 rounded-full bg-red-400 text-white hover:bg-rose-500 hover:scale-105 transition-all" type="submit" value="Continue"></input>
                </form>

                
                <div class="font-semibold my-3 text-sm lg:mx-20 text-center sm:text-lg">
                    By {formCondition}, you agree to Quizigma's <a href="https://www.youtube.com/watch?v=R_RAWjqdgTs" target="_blank" class="underline text-yellow-300">Conditions of Use</a> and <a href="https://www.youtube.com/watch?v=U_qZtLu52nM" target="_blank" class="underline text-yellow-300">Privacy Notice.</a>
                </div>
            </div>
            
            <AccountBottomButton value={formValue} />
        </>
    )
}
export default AccountForm