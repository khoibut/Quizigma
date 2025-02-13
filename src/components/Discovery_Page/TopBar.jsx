import { useRef } from "react"
function TopBar({ searchBar }) {
    const searhRef = useRef()
    function displaySearchBar() {
        if (searchBar) {
            return (
                <div class="flex pl-5 items-center">
                    <input ref={searhRef} onKeyDown={(e)=>{
                        if(e.key == "Enter"){
                            window.location.href = `/search?searchBar=${encodeURI(searhRef.current.value)}`
                        }
                    }} type="text" placeholder="Search.." class="rounded-full h-10 w-[150px] caret-white bg-gray-800 p-2 pl-3 text-white" />
                </div>
            )
        }
    }
    return (
        <>
            {/* <!-- top bar --> */}
            <div class="font-bold bg-[#338ACB] h-[60px] flex w-full items-center">
                <div onClick={() => { window.location.href = "/" }} class="text-4xl pl-5 items-center cursor-pointer">
                    Quizigma
                </div>

                <div class="grow flex-1"></div>

                {/* Search bar */}

                {displaySearchBar()}
            </div>
        </>
    )
}
export default TopBar