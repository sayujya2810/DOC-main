import React, { useEffect } from 'react'
import "./styles/Team.css"
import AOS from 'aos';
import "aos/dist/aos.css"


const Team = () => {
    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);
  return (
    <div id='team'>
        <h1>Our Team</h1>
        <div className='rows'>
            <div className='inner-row' >
                <div className='cards'  data-aos={"fade-left"} >
                    <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
                    <h2>Rachel Khattak</h2>
                    <p>Rachel is a cyber security engineer, futurist and ​digital entrepreneur. She has built a network of over 500 million followers on social media.</p>
                </div>
                <div className='cards' data-aos={"fade-left"} >
                    <img alt='user' src='./images/profile/diego.jpg' style={{borderRadius:"50%"}} />
                    <h2>Diego Vargas</h2>
                    <p>Founder of Goat Marketing and meme networks on Instagram, Diego has worked with major brands like Netflix, Tinder, Burger King, FitTea, and more.</p>
                </div>
            </div>
            <div className='inner-row'>
                <div className='cards' data-aos={"fade-left"} >
                    <img alt='user' src='./images/nft-img.png' style={{borderRadius:"50%"}} />
                    <h2>Brian Bennett</h2>
                    <p>With over two decades of experience in the IaaS field, Brian brings a wealth of technical knowledge and expertise to the team.</p>
                </div>
                <div className='cards' data-aos={"fade-left"} >
                    <img alt='user' src='./images/profile/victor.jpg' style={{borderRadius:"50%"}} />
                    <h2>Victor Nunez</h2>
                    <p>As an early adopter to Discord, Manuel is utilizing his​management skill to help NFT projects build their digital footprint.</p>
                </div>
            </div>
            
        </div>

        
    </div>
  )
}

export default Team