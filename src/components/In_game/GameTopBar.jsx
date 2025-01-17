import ExampleProfilePic from '../Icons&Images/godzilla.jpg';

function GameTopBar({player, roomId}){
    return(
        <>
            <div className="bg-green-500 w-full max-h-[50vh] flex justify-between items-center flex-wrap ">
                <div className="flex items-center -space-x-8 h-full">
                    <div className="text-5xl text-white pl-5 items-center font-bold mr-10">
                        Quizigma
                    </div>
                    <div className="text-2xl text-white pl-5 items-center font-medium mt-3">
                        {"#" + roomId}
                    </div>
                </div>

                <div className="flex items-center">
                    <div className=" ml-8 text-xl font-medium overflow-hidden max-w-[30vh] max-h-[8vh]">
                        {player.name}
                    </div>
                    <div className="w-[8vh] h-[8vh] rounded-full bg-white m-2 overflow-hidden">
                        <img src={ExampleProfilePic} alt="Profile Picture" className="w-full h-full object-fill" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameTopBar;