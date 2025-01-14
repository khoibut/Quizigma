import AnswerCard from "./AnswerCard";
function AnswerDeck(){
    return(
        <>
            <div className="flex w-full h-full">
                <div className="bg-gray-800 h-full w-4/5 flex justify-evenly mt-1 pt-5 overflow-auto snap-x space-x-2">
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                    <AnswerCard text="Answer 1" color="red"/>
                </div>

                <div className="bg-gray-600 h-full w-1/5 mt-1 flex flex-col items-center">
                    <div className='bg-white w-2/3 h-[7vh] rounded-full flex justify-center items-center font-medium mt-3 mb-3 border-l-4 border-r-4 border-purple-900'>
                        <span className='text-2sm md:text-5xl animate-wiggle mr-2'>
                            +999
                        </span>
                    </div>
                    
                    <div className='h-full w-full space-y-2 p-2'>
                        <button className="group bg-sky-200 w-full md:h-[9vh] h-[5vh] rounded-2xl flex justify-start items-center border-white md:hover:animate-shrinkBorderLeft transition ease-out hover:scale-90 active:scale-75">
                            <div className="md:text-[5vh] font-bold text-sm mr-2 p-2 text-black group-hover:text-sky-900">
                                Next
                            </div>
                        </button>

                        <button className="group bg-sky-200 w-full md:h-[9vh] h-[5vh] rounded-2xl flex justify-end items-center border-white md:hover:animate-shrinkBorderRight transition ease-out hover:scale-90 active:scale-75">
                            <div className="md:text-[5vh] font-bold text-sm mr-2 p-2 text-black group-hover:text-sky-900">
                                Back
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnswerDeck;