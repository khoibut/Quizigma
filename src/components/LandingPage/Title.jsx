import { NavLink } from "react-router"
import '../../assets/styles/App.css'

function Title() {
    return(
        <>
            <div className="font-bold bg-[#338ACB] h-[60px] text-5xl pl-5 flex w-full">
                <NavLink to="/" end>Quizigma</NavLink>
            </div>
        </>
    )
}
export default Title