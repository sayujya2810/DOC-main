
import React, { useEffect, useState } from 'react'
import "./styles/Main.css"
import Moralis from 'moralis'
import AOS from 'aos';
import ModalComp from "./ModalComp"
import "aos/dist/aos.css"


// import 'bootstrap/dist/css/bootstrap.min.css';



const Main = (props) => {

  const flag = props.child2;
  const userAddress = props.userAddress_



  // const [show, setShow] = useState(false);
  

      useEffect(() => {
  AOS.init({
    duration : 1000
  });
}, []);


async function mint(){
      let options = {
        contractAddress:"0x55F95a6Dce232856BF0b2377c946676C01863FDB",
        functionName:"mintNFTs", 
        abi:[{"inputs": [	{"internalType": "uint256","name": "_count","type": "uint256"}],"name": "mintNFTs","outputs": [],"stateMutability": "payable","type": "function"}],
        params:{_count: 1},
        msgValue: Moralis.Units.ETH(0.0009)
      }
      await Moralis.executeFunction(options);

    } 

function showAlert(){
  console.log("ey")
}

  return (
    <section id='main'>
        {/* <div className='triangle1' /> */}
        {/* <img src='./images/Main.jpg' /> */}
        <div data-aos="zoom-in" id='main-content'>
            <img src='./images/small-logo-02.png' />
            <div className='btns' style={{display:"flex"}}>
              <button id="mint-btn" onClick={mint}>MINT</button>
              {/* <ModalComp   /> */}

              {/* {flag === true ? <ModalComp userAddress_inner={userAddress} /> : <></>} */}
              <ModalComp userAddress_inner={userAddress} />
            
            </div>


            {/* <Button variant="primary" onClick={() => setShow(true)} >Verify</Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{backgroundColor:"rgba(0,0,0,0.3)", backdropFilter:"blur(7px)"}}
      >
        <Modal.Header closeButton  >
          <Modal.Title style={{color:"black"}} id="example-custom-modal-styling-title" >
             Get yourself Whitelisted! 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
      </Modal> */}
            
              {/* <OverlayTrigger overlay={<Tooltip style={{backgroundColor:"#ab203d"}} id="tooltip-disabled">Minting Not Started</Tooltip>}>
                <span className="d-inline-block">
                  <Button disabled style={{ pointerEvents: 'none' }}>
                    Disabled button
                  </Button>
                </span>
              </OverlayTrigger>
              <Button className='primary'>Whitelist me</Button> */}
            {/* <Button variant="dark" >Mint here</Button> */}
            {/* <button>Click</button> */}
            {/* <input type="text"></input> */}
            {/* <p>Tempor ut culpa eu proident esse non est cillum tempor do.  Mollit aliquip voluptate proident dolore veniam non commodo irure proident labore fugiat dolor. Esse tempor commodo commodo sit incididunt elit quis minim tempor ullamco adipisicing esse exercitation.</p> */}
        </div>
        {/* <ModalComp /> */}
    </section>
  )
}

export default Main