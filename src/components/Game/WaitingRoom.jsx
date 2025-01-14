import { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
function Player(player) {
    return (
        <>
            <div class="bg-white py-10 px-24 rounded-full text-center text-xl font-bold w-fit">{player.name}</div>
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
            <div class="flex h-screen p-7 gap-2 bg-[#3272E8]">
                <div class="lg:w-[78%] w-[70%] flex flex-wrap content-center justify-center gap-8 h-full overflow-hidden">
                    {players.map((player) => {
                        return (
                            <Player name={player} />
                        )
                    })}
                </div>

                <div class="bg-[#B1E5FF] h-full rounded-lg p-4 w-[30%] lg:w-[22%] shadow-[0_8px_2px_rgba(0,0,0,0.4)]">
                    <div class="justify-self-center text-lg font-extrabold mb-10 text-center">Waiting for host to start game</div>
                    <div class="font-semibold text-lg">Join by enter this code:</div>
                    <div class="flex mb-6 items-center gap-2">
                        <span class="w-4/5 bg-white p-4 ps-4 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)]">{"#" + roomId}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" /></svg>
                    </div>
                    <div class='flex justify-between mb-6'>
                        <span class="font-semibold text-lg">QR Code: </span>
                        <span class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] h-[100px] w-[100px]">idk</span>
                    </div>
                    <div class="flex flex-col mb-6">
                        <div class="font-semibold text-lg">Assignment link: </div>
                        <div onClick={() => { navigator.clipboard.write('sex.com/sexsupersex'); }} class="bg-white cursor-pointer p-1 ps-3 rounded-lg shadow-[0_5px_1px_rgba(0,0,15,0.5)] overflow-hidden w-full">sex.com/sexsupersex</div>
                    </div>

                    <div class="flex flex-col items-center w-full aspect-square gap-4">
                        <div class="aspect-square bg-black h-3/5 rounded-full"></div>
                        <div class="bg-white w-4/5 p-2 text-center text-nowrap rounded-lg overflow-hidden">{player.name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WaitingRoom