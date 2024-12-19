import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import Discovery from './assets/components/Hien/DiscoveryPage.jsx'
import LandingPage from './assets/components/Hien/LandingPage.jsx'
import Test from './assets/components/Hien/Test.jsx'
import "./index.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Discovery /> */}
      {/* <LandingPage /> */}
      <Test />
    </>
  )
}

export default App
