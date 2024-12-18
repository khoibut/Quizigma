import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
import SignIn from './components/AccountSystem/SignIn.jsx'
import SignUp from './components/AccountSystem/SignUp.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx';

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
