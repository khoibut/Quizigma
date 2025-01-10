// import OnlineIcon from '../../assets/images/OnlineIcon.png'
// import PlayIcon from '../../assets/images/PlayIcon.png'
import landingPageBg from '../../assets/images/landingPageBg.png'
import Title from './Title.jsx'
import MainSidebar from './MainSidebar.jsx'
import '../../assets/styles/App.css'
// import AccountForm from '../AccountSystem/AccountForm.jsx'


function LandingPage() {
    return (
        <>
            <Title />
            <div className="flex w-full h-auto">
                <div className="flex grow justify-end h-auto">
                    <MainSidebar />
                    <div className="h-auto w-full">
                        <img src={landingPageBg} alt="Welcome to Quizigma" className="w-full object-fit" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage