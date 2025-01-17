import ExampleImg from '../Icons&Images/godzillaxHenry.jpg';

function QuestionDisplay({text}){
    return (
        <>
            <div className="bg-white flex flex-wrap overflow-auto md:overflow-hidden w-full h-[45vh] items-center">
                <div className=" flex md:w-1/5 h-full grow justify-center items-center mx-2">
                    <div className="flex bg-gray-100 border-[5px] border-gray-600 rounded-2xl md:w-full md:h-5/6 overflow-hidden">
                    </div>
                </div>

                <div className="md:w-3/4 md:h-full flex justify-center items-center">
                    <div className="w-full h-full flex flex-col items-center">
                        <div className="text-xl w-[20vh] h-[5vh] flex justify-center items-center font-medium rounded-full border-4 border-gray-700">
                            QUESTION
                        </div>
                        <div className="bg-[#D9EAFD] rounded-3xl w-full h-5/6 overflow-y-auto overflow-hidden">
                            <div className="ml-2 mt-2 mb-2 text-lg">
                                {text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionDisplay;