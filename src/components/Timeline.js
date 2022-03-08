import React, { useEffect } from 'react'
import "./styles/Timeline.css"
import AOS from 'aos';
import "aos/dist/aos.css"

    

const Timeline = () => {

  function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform === "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

    useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);

  return (
    <div className="containers" id='timeline'>
          <h1>Roadmap</h1>
        <div className="timelines" data-aos="zoom-in" >
            <ul>
            <li className='timeline-box' onClick={flip} >
                <div className="timeline-content"  >
                <h3 className="date">Q1 2022</h3>
                <h1>25% Minted</h1>
                <p>$25,000 charitable donation of our communities choice</p>
                </div>
            </li>
            <li className='timeline-box' onClick={flip}>
                <div className="timeline-content" >
                <h3 className="date">Q2 2022</h3>
                <h1>50% Minted</h1>
                <p>Podcast series that will highlight women & Web3</p>
                </div>
            </li>
            <li className='timeline-box' onClick={flip}>
                <div className="timeline-content" >
                <h3 className="date">Q3 2022</h3>
                <h1>75% Minted</h1>
                <p>Exclusive content for NFT holders</p>
                </div>
            </li>
            <li className='timeline-box' onClick={flip}>
                <div className="timeline-content" >
                <h3 className="date">Q4 2022</h3>
                <h1>100% Minted</h1>
                <p>SOLD OUT! First IRL event for NFT holders</p>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Timeline;