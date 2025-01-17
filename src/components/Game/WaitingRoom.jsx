import { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
function Player(player) {
    return (
        <>
            <div className="bg-white min-w-fit w-[230px] leading-[100px] h-[100px] rounded-full text-center text-xl font-bold">{player.name}</div>
        </>
    )
}
function PlayerSelector({ choosePlayer }) {
    let nameInput
    return (
        <>
            <div class="flex flex-col items-center gap-10 md:w-[22%]">
                <div class="rounded-full text-center h-[30%] aspect-square border-2 border-black">hrllo</div>
                <input ref={(current) => { nameInput = current }} class="bg-[#B0B0B0] w-full rounded-full p-6 font-semibold text-lg placeholder-white outline-none text-center shadow-[0_3px_5px_1px_rgba(0,0,0,0.2)]" type="text" placeholder="Enter your name" />
                <button onClick={() => {
                    choosePlayer({
                        playing: false,
                        name: nameInput.value
                    })
                }} class="w-[70%] bg-[#25FF50] border-green-950 border rounded-full py-2 font-bold hover:scale-110 transition-all">Join</button>
            </div>
        </>
    )
}
function WaitingRoom({ roomId, player, setPlayer, players, setPlayers }) {
    return (
        <>
            <Modal
                isOpen={player.playing}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: '#fff'
                    },
                    content: {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        border: 'none',
                        background: 'none',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0'
                    }
                }}
            >
                <PlayerSelector choosePlayer={setPlayer} />
            </Modal>
            {console.log(players)}
            <div className="flex h-screen p-1 sm:p-2 gap-2 bg-[#3272E8] max-sm:flex-col-reverse">
                <div className="lg:w-[78%] w-[70%] flex max-sm:p-2 md:items-center content-center justify-center overflow-auto max-sm:w-full ">
                    <div className="grid h-fit md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {players.map((player) => {
                        return (
                            <Player name={player.name} />
                        )
                    })}
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
                    <div className="w-full flex sm:flex-col gap-5 items-center">
                        <div className="aspect-square w-[20%] sm:w-[50%] bg-black rounded-full "></div>
                        <div className="bg-white w-[60%] p-2 rounded-xl overflow-hidden text-center">{player.name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WaitingRoom