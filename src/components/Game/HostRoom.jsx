function Player( player ) {
    return (
        <>
            <div className="bg-white min-w-fit w-[230px] py-10 rounded-full text-center text-xl font-bold">{player.name}</div>
        </>
    )
}
function HostingRoom() {
    return (
        <>
            <div className="flex h-screen p-1 sm:p-2 gap-2 bg-[#3272E8] max-sm:flex-col-reverse">
                <div className="lg:w-[78%] w-[70%] flex max-sm:p-2 md:items-center content-center justify-center overflow-auto max-sm:w-full ">
                    <div className="grid h-fit md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="player 1" />
                        <Player name="+10 more" />
                    </div>
                </div>

                <div className="bg-[#B1E5FF] rounded-lg p-2 pb-4 sm:p-4 w-[37%] lg:w-[25%] shadow-[0_8px_2px_rgba(0,0,0,0.4)] max-sm:w-full max-sm:h-fit">
                    <div className="justify-self-center text-lg font-extrabold mb-6 text-center">Waiting for host to start game</div>
                        <div className="flex max-sm:gap-4 mb-4 flex-wrap">
                            <div className="font-semibold sm:text-lg md:basis-full">Join by enter this code:</div>
                            <div className="flex items-center gap-1 flex-wrap">
                                <span className="bg-white cursor-pointer p-1 px-4 w-fit rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden">#123456</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                            </div>
                        </div>
                        
                        <div className='flex gap-6 mb-4 flex-wrap'>
                            <span className="font-semibold sm:text-lg">QR Code: </span>
                            <span className="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] h-[70px] sm:h-[100px] aspect-square">idk</span>
                        </div>
                        
                        <div className="flex gap-2 max-sm:gap-6 mb-4 flex-wrap">
                            <span className="font-semibold sm:text-lg">Assignment link: </span>
                            <span onClick={() => {navigator.clipboard.write('sex.com/sexsupersex');}} className="w-fit max-w-[200px] bg-white cursor-pointer p-1 px-4 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden">sex.com/sexsupersex</span>
                        </div>
                    <div class="flex flex-col items-center">
                        <button class="w-full sm:w-fit bg-red-400 rounded-full py-2 px-16 text-white hover:bg-rose-500 hover:scale-105 transition-all">START</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HostingRoom