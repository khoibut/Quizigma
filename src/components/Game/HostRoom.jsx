function Player( player ) {
    return (
        <>
            <div class="bg-white py-10 px-24 rounded-full text-center text-xl font-bold w-fit">{player.name}</div>
        </>
    )
}
function HostingRoom() {
    return (
        <>
            <div class="flex h-screen p-7 gap-2 bg-[#3272E8]">
                <div class="lg:w-[78%] w-[70%] flex flex-wrap content-center justify-center gap-8 h-full overflow-hidden">
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

                <div class="bg-[#B1E5FF] h-full rounded-lg p-4 w-[30%] lg:w-[22%] shadow-[0_8px_2px_rgba(0,0,0,0.4)]">
                    <div class="justify-self-center text-lg font-extrabold mb-10 text-center">Waiting for host to start game</div>
                    <div class="font-semibold text-lg">Join by enter this code:</div>
                    <div class="flex mb-6 items-center gap-2">
                        <span class="w-4/5 bg-white p-4 ps-4 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)]">#123456</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                    </div>
                    <div class='flex justify-between mb-6'>
                        <span class="font-semibold text-lg">QR Code: </span>
                        <span class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] h-[100px] w-[100px]">idk</span>
                    </div>
                    <div class="flex flex-col mb-6">
                        <div class="font-semibold text-lg">Assignment link: </div>
                        <div onClick={() => {navigator.clipboard.write('sex.com/sexsupersex');}} class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden w-full">sex.com/sexsupersex</div>
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