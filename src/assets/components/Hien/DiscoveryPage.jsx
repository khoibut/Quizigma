import SideBar from "./SideBar.jsx"
import TopBar from "./TopBar.jsx"
import DisplayBar from "./DisplayBar.jsx"

function Discovery(){ 
    return (
        <>
            <TopBar />
            <div class="flex w-full h-screen">
                <SideBar />
                <DisplayBar />
            </div>
        </>
    )
}
export default Discovery