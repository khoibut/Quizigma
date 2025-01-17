function WrongScreen({onNext}){
    return(
        <>
            <div className="w-full h-screen overflow-hidden bg-red-500" onClick={onNext}>
                YOU ARE FUCKING STUPID BITCH YOU ANSWERD THE QUESTION WRONG
            </div>
        </>
    )
}
export default WrongScreen;