import { useState } from "react"

function Question() {
    return (
        <>
            <div class="flex w-[90%] bg-[#FF4B54] rounded-lg p-5 gap-2 h-fit hover:scale-110 transition-all max-md:mt-10">
                <div class="w-[30%] flex flex-col items-center">
                    <div class="w-[80%] aspect-square bg-black">Image</div>
                    <div>Author</div>
                </div>
                <div class="w-[70%]">
                    <div class="font-extrabold text-lg">Quiz name</div>
                    <div>Question: [total question]</div>
                    <div>Total play: [Amount of plays]</div>
                    <div>Created [times]</div>
                </div>
            </div>
        </>
    )
}
function AddFromDiscovery( {openFunction} ) {
    const [filterIsOpen, setFilter] = useState(true)
    let filter 

    function openFilter() {
        if(filterIsOpen)
            filter.style.display = "flex"
        else    
            filter.style.display = "none"
        setFilter(!filterIsOpen)
    }

    return(
        <>
            <div class="h-full w-[100%] sm:w-[90%] m-auto relative border border-black grid grid-rows-[200px_1fr]">
                <div class="bg-[#E54C38] flex p-4 gap-4 items-center flex-wrap">
                    <input type="text" />
                    <button onClick={openFilter} class="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">FILTER</button>
                    <div class="ml-auto flex gap-5">
                        <button onClick={() => {openFunction(false)}} class="ml-auto bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">EXIT</button>
                        <button class="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">ADD</button>
                    </div>
                </div>
                <div ref={(current) => {filter = current}} class="bg-white p-5 fixed w-[90%] rounded-b-xl shadow-[0_8px_rgba(0,0,0,0.4)] z-20 hidden flex-col gap-5 before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-b-[12px] before:border-b-white before:border-r-[10px] before:border-r-transparent before:absolute before:top-0 before:-translate-y-2 before:translate-x-[230px]">
                    <div class="flex gap-8">
                        <div>Total question</div>
                        <div>From</div>
                        <input class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 w-[10%]"  type="number" />
                        <div>To</div>
                        <input class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 w-[10%]"  type="number" />
                    </div>
                    <div class="flex gap-8">
                        <div>Date:</div>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">Today</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">This week</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">This month</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">This year</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">All time</button>
                    </div>
                    <div class="flex gap-8">
                        <div>Sort by:</div>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">Most plays</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">Least play</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">A → Z</button>
                        <button class="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">Z → A</button>
                    </div>
                    <button class="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold w-[10%]">Find</button>
                </div>
                <div class="bg-[#F8858B] overflow-auto p-5 grid max-md:gap-6 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-3">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </>
    )
}
export default AddFromDiscovery