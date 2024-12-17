import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
import AccountForm from '../AccountSystem/SignIn.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccountForm value={"SIGN IN"} inputs={['email', 'password']} />
    </>
  )
}

export default App
