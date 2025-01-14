import ExampleImg from '../Icons&Images/godzillaxHenry.jpg';

function In_Game_Question_Display(){
    return (
        <>
            <div className="flex flex-wrap overflow-auto w-full h-[60vh] items-center">
                <div className="flex w-[92vh] h-full grow justify-center items-center">
                    <div className="bg-gray-100 border-[5px] border-gray-600 rounded-2xl max-w-[60vh] grow h-[50vh] overflow-hidden">
                        <img src={ExampleImg} alt="" className="w-full h-full" />
                    </div>
                </div>

                <div className="bg-gray-300 w-[92vh] h-full flex justify-center items-center">
                    <div className="bg-white w-full h-full flex flex-col items-center">
                        <div className="text-xl w-[20vh] h-[6vh] flex justify-center items-center font-medium rounded-full border-4 border-gray-700 m-1">
                            QUESTION
                        </div>
                        <div className="bg-[#D9EAFD] rounded-3xl w-full h-full overflow-y-auto overflow-hidden">
                            <div className="ml-2 mt-2 mb-2 text-lg">
                                what is 1+1?   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default In_Game_Question_Display;