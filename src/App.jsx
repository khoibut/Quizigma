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
import SideBar from './assets/components/Hien/SideBar.jsx';
import TopBar from './assets/components/Hien/TopBar.jsx';

import "./index.css"
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='questionlist' element={<QuestionDisplay />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='discovery' element={<Discovery />} />
          <Route path='addquiz' element={<AddQuiz/>} />
          <Route path='sidebar' element={<SideBar />}/>
        </Routes>
      </BrowserRouter>

      
      {/* <LandingPage /> */}
      {/* <Test /> */}
      {/* <TemplateCard /> */}
      {/* <SideBar /> */}
      {/* <Discovery /> */}
    </>
  )
}

export default App
