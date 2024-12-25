import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
import SignIn from './components/AccountSystem/SignIn.jsx'
import SignUp from './components/AccountSystem/SignUp.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AddQuestion from './components/QuestionSystem/AddQuiz.jsx'
import QuestionDisplay from './components/QuestionSystem/QuestionDisplay.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Discovery from './assets/components/Hien/DiscoveryPage.jsx'
import Test from './assets/components/Hien/Test.jsx'
import "./index.css"
import HostGame from './components/Game/HostGame.jsx'
import AddImage from './components/PopUp/AddImage.jsx'
import AddQuiz from './components/QuestionSystem/AddQuiz.jsx'

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
        </Routes>
      </BrowserRouter>

      {/* <Discovery /> */}
      {/* <LandingPage /> */}
      {/* <Test /> */}
      {/* <TemplateCard /> */}
    </>
  )
}

export default App
