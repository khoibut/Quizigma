import computerScreen from '../../assets/images/ComputerScreen.jpg'
import controller from '../../assets/images/Controller.png'
import { useNavigate } from 'react-router';
import { NavLink } from "react-router";

function JoinGame() {
    let input
    const navigate = useNavigate();

    function handleEnter() {
        navigate("/game/" + input.value);
    }

    return (
        <>
            <div class="bg-green-500 w-full h-[10vh] flex justify-center items-center">
                <p className='sm:text-5xl text-4xl font-bold text-white'>Quizigma</p>
            </div>
            <div class="flex flex-col h-[90vh]">
                    <span class="ml-5 w-fit hover:scale-110 rounded-xl hover:bg-[rgba(0,0,0,.2)] transition-all">
                        <NavLink to='/discovery' end>
                            <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#000000"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
                        </NavLink>
                    </span>
                    <img class="self-center md:h-3/5 h-2/5 object-cover" src={computerScreen} alt="" />
                    <div className='self-center w-4/6 md:w-1/2 xl:w-1/3 md:h-[25vh] h-[30vh] flex flex-wrap'>
                        <div className='sm:h-full sm:w-1/3 md:w-1/2 h-1/2 w-full flex justify-center'>
                            <img class="h-full w-2/4 sm:w-4/5 relative z-10" src={controller} alt="" />
                        </div>
                        <div className='sm:h-full sm:w-2/3 md:w-1/2 h-1/2 w-full flex items-center'>
                            <input ref={(current) => (input = current)} onKeyDown={(e) => {
                                if(e.key == "Enter") {
                                    handleEnter()
                                }
                            }} type="text" className="w-full h-3/4 sm:h-1/3 bg-[#B0B0B0] rounded-xl ps-4 py-3 sm:pl-[1vh] pl-0 md:py-2 md:text-2xl relative sm:-left-[12%] md:-left-[22%] -top-[40%] sm:-top-0 text-3xl text-center outline-none font-semibold" />
                        </div>
                    </div>
            </div>
        </>
    )
}
export default JoinGame