import computerScreen from '../../assets/images/ComputerScreen.jpg'
import controller from '../../assets/images/Controller.png'
import { useNavigate } from 'react-router';

function JoinGame() {
    let input
    const navigate = useNavigate();

    function handleEnter() {
        navigate("/game#" + input.value);
    }

    return (
        <>
            <div class="bg-green-500 w-full h-[10vh]"></div>
            <div class="flex flex-col h-[90vh]">
                <span class="ml-5 w-fit hover:scale-110 rounded-xl hover:bg-[rgba(0,0,0,.2)] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
                </span>
                <img class="self-center h-3/5 object-cover" src={computerScreen} alt="" />
                <div class="self-center flex items-center relative h-[28%]">
                    <img class="relative -right-[8%] h-4/5" src={controller} alt="" />
                    <input ref={(current) => (input = current)} onKeyDown={(e) => {
                        if(e.key == "Enter") {
                            handleEnter()
                        }
                    }} type="text" class="w-[20vw] bg-[#B0B0B0] rounded-xl ps-4 py-3 md:ps-12 md:py-5 md:text-lg outline-none font-semibold" />
                </div>
            </div>
        </>
    )
}
export default JoinGame