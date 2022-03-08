import React, { useState } from 'react'
import Faq from './Faq'
import Footer from './Footer'
import Intro from './Intro'
import Main from './Main'
// import Navbar from './Navbar'
import Team from './Team'
import Timeline from './Timeline'
import "./styles/Home.css"
import About from './About'
import Mint from './Mint'
import Cursor from './Cursor'
import ModalComp from './ModalComp'
import Navbar from './Navbar'
// import Navbar from './components/navbar/'
// import WalletCard from './WalletCard'

const Home = () => {

  const [flag, setFlag] = useState(false)
  const [userAddress, setUserAddress] = useState("")


  return (
    <>
        {/* <Navbar /> */}
            <Navbar child1={setFlag} userAddress = {setUserAddress} />
        <div className='home'>
          {/* <WalletCard /> */}
          {/* <Mint /> */}
            <Main child2={flag} userAddress_ = {userAddress} />
            <Intro />
            <About />
            <Timeline />
            <Faq />
            <Team />
            <Footer />
            <Cursor />
            {/* <ModalComp /> */}
        </div>
    
    </>
  )
}

export default Home