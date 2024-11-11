import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav/Nav'
import Menu from './Menu/Menu'
import Banner from './assets/Banner-img/Banner'
// import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Nav />
      <Menu />
      <Banner />
    </>

  )
}

export default App
