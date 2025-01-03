import './assets/styles/App.css'
import SignIn from './components/AccountSystem/SignIn.jsx'
import SignUp from './components/AccountSystem/SignUp.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AddQuestion from './components/QuestionSystem/AddQuiz.jsx'
import QuestionDisplay from './components/QuestionSystem/QuestionDisplay.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Discovery from './assets/components/Hien/DiscoveryPage.jsx'
import Test from './assets/components/Hien/Test.jsx'
import AddQuiz from './components/QuestionSystem/AddQuiz.jsx';
import "./index.css"
import HostGame from './components/Game/HostGame.jsx'
import AddImage from './components/PopUp/AddImage.jsx'
import JoinGame from './components/Game/JoinGame.jsx'
import WaitingRoom from './components/Game/WaitingRoom.jsx'
import HostingRoom from './components/Game/HostRoom.jsx'
import Game_Text from './assets/components/Hien/Game_MultipleChoice_Answer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='questionlist' element={<QuestionDisplay />} />
          <Route path='host' element={<HostGame />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='addquiz' element={<AddQuiz />} />
          <Route path='join' element={<JoinGame />} />
          <Route path='game/*' element={<WaitingRoom />} />
          <Route path='discovery' element={<Discovery />} />
          <Route path='game/hosting/*' element={<HostingRoom />} />
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
