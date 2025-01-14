import './assets/styles/App.css'
import SignIn from './components/AccountSystem/SignIn.jsx'
import SignUp from './components/AccountSystem/SignUp.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AddQuestion from './components/QuestionSystem/AddQuiz.jsx'
import QuestionDisplay from './components/QuestionSystem/QuestionDisplay.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Discovery from './components/Discovery_Page/DiscoveryPage.jsx'
import Test from './components/Test.jsx'
import AddQuiz from './components/QuestionSystem/AddQuiz.jsx';
import "./index.css"
import HostGame from './components/Game/HostGame.jsx'
import AddImage from './components/PopUp/AddImage.jsx'
import JoinGame from './components/Game/JoinGame.jsx'
import WaitingRoom from './components/Game/WaitingRoom.jsx'
import HostingRoom from './components/Game/HostRoom.jsx'
import Library from './components/Library_Page/LibraryPage.jsx'
import MultipleChoice from './assets/components/Hien/In_game/MultipleChoice.jsx'
import Game_Text from './assets/components/Hien/In_game/TextAnswer.jsx'
import StatManagement from './components/Game/StatManagement.jsx'
import PlayerStat from './components/Game/PlayerStat.jsx'
import GamePage from './pages/gamePage.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='questionlist' element={<QuestionDisplay />} />
          <Route path='host/:setId' element={<HostGame />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='addquiz' element={<AddQuiz />} />
          <Route path='join' element={<JoinGame />} />
          <Route path='game/:roomId' element={<GamePage />} />
          <Route path='game/host/:roomId' element={<HostingRoom />} />
          <Route path='game/host/stat' element={<StatManagement totalQuestion="10" />} />
          <Route path='game/stat' element={<PlayerStat total="10" score="10000" correct="9" />} />
          <Route path='discovery' element={<Discovery />} />
          {/* <Route path='sidebar' element={<SideBar />}/> */}
          <Route path='library' element={<Library />} />
          <Route path='game_multiple_choice' element={<MultipleChoice />} />
          <Route path='game_text' element={<Game_Text />} />
          <Route path='code_testing' element={<Test />}/>
        </Routes>
      </BrowserRouter>

      {/* <LandingPage /> */}
      {/* <TemplateCard /> */}
    </>
  )
}

export default App
