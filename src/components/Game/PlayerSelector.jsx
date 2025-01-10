function PlayerSelector( {choosePlayer} ) {
    let nameInput
    return (
        <>
            <div className="flex flex-col items-center gap-10 md:w-[22%]">
                <div className="rounded-full text-center h-[30%] aspect-square border-2 border-black">hrllo</div>
                <input ref={(current) => {nameInput = current}} className="bg-[#B0B0B0] w-full rounded-full p-6 font-semibold text-lg placeholder-white outline-none text-center shadow-[0_3px_5px_1px_rgba(0,0,0,0.2)]" type="text" placeholder="Enter your name" />
                <button onClick={() => {choosePlayer({
                    playing: false,
                    name: nameInput.value
                })}} className="w-[70%] bg-[#25FF50] border-green-950 border rounded-full py-2 font-bold hover:scale-110 transition-all">Join</button>
            </div>
        </>
    )
}
export default PlayerSelector