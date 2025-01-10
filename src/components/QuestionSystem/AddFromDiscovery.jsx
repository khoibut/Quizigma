import { useState } from "react"

function Question() {
    return (
        <>
            <div className="flex bg-[#FF4B54] rounded-lg p-2 py-4 sm:p-5 gap-2 h-[180px] sm:h-[200px] sm:hover:scale-110 transition-all">
                <div className="w-[30%] flex flex-col items-center">
                    <div className="w-[80%] aspect-square bg-black">Image</div>
                    <div>Author</div>
                </div>
                <div className="w-[70%]">
                    <div className="font-extrabold text-lg">Quiz name</div>
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
            <div className="h-full w-[100%] sm:w-[90%] m-auto relative border border-black flex flex-col">
                <div className="bg-[#E54C38] w-full flex p-4 gap-4 items-center flex-wrap">
                    <input className="max-sm:basis-[70%] outline-none py-3 px-5 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500"  type="text" />
                    <div className="flex gap-4">
                        <button onClick={openFilter} className="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">FILTER</button>
                        <button onClick={() => {openFunction(false)}} className="ml-auto bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">EXIT</button>
                        <button className="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold">ADD</button>
                    </div>
                </div>
                <div ref={(current) => {filter = current}} className="bg-white p-4 fixed translate-y-[140px] sm:translate-y-[80px] w-full sm:w-[90%] rounded-b-xl shadow-[0_8px_rgba(0,0,0,0.4)] z-20 hidden flex-col gap-5 before:w-0 before:h-0 before:border-l-[10px] before:border-l-transparent before:border-b-[12px] before:border-b-white before:border-r-[10px] before:border-r-transparent before:absolute before:top-0 before:-translate-y-2 before:translate-x-[30px] sm:before:translate-x-[250px]">
                    <div className="flex gap-2 sm:gap-8 flex-wrap">
                        <div className="max-sm:w-full font-bold">Total question</div>
                        <div>
                            <span>From</span>
                            <input className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 w-[100px] ml-2"  type="number" />
                        </div>
                        <div>
                            <span>To</span>
                            <input className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 w-[100px] ml-2"  type="number" />
                        </div>
                    </div>
                    <div className="flex gap-2 sm:gap-8 flex-wrap">
                        <div className="max-sm:w-full font-bold">Date:</div>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">Today</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">This week</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">This month</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">This year</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">All time</button>
                    </div>
                    <div className="flex gap-2 sm:gap-8 flex-wrap">
                        <div className="max-sm:w-full font-bold">Sort by:</div>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">Most plays</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">Least play</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md p-2 sm:px-4 hover:scale-110 transition-all">A → Z</button>
                        <button className="shadow-[0_2px_4px_1px_rgba(0,0,0,0.3)] rounded-md py-2 px-4 hover:scale-110 transition-all">Z → A</button>
                    </div>
                    <button className="bg-[#BFF4FF] py-3 px-5 rounded-lg hover:scale-105 transition-all font-bold w-fit">Find</button>
                </div>
                <div className="bg-[#F8858B] h-full overflow-auto">
                    <div className="overflow-auto p-2 gap-2 sm:gap-5 sm:p-5 lg:p-10 grid md:grid-cols-2 lg:grid-cols-3">
                        <Question />
                        <Question />
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
                
                {/* <div className="bg-[#F8858B] overflow-auto flex h-full flex-wrap">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div> */}
            </div>
        </>
    )
}
export default AddFromDiscovery