import React, {useState } from 'react'
import Axios from 'axios'




const Register = (props) => {

    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phno, setPhno] = useState("")

    const userAddress = props.userAddress_inner2
    // const [modalShow, setModalShow] = React.useState(false);

    

    // const submitData = (e) => {
    //     e.preventDefault()
    //     var data = {
    //       address: address,
    //       email: email,
    //       phno: phno
    //     }
    // }

    
    const addUser = (event) => {
      event.preventDefault()
      Axios.post('http://localhost:3002/adduser', {address:userAddress, email: email, phno: phno})
        .then(() => {
          alert("It worked")
        })
        .catch(() => {
          alert("Errrrrr")
        })
    }


  return (
        <div style={{display: "flex",justifyContent:"center", alignItems:"center"}}>
          <div style={{zIndex:11, backgroundColor:"white", borderRadius:"5px", width:"50%", margin:"5rem" ,display: "flex",justifyContent:"center", alignItems:"center"}}>
            <form style={{display:"flex", width:"100%", padding:"2rem", flexDirection:"column",display: "flex", alignItems:"center"}} >
              <h2 style={{color:"black"}}>Get yourself Whitelisted!</h2>
              {/* <input onChange={e => setAddress(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem"}} placeholder="address" id='blockchain-address' type="text" /> */}
              <input onChange={e => setEmail(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem"}} id='user-email' type="email" placeholder='email' required />
              <input onChange={e => setPhno(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem"}} id='phno' type="text" placeholder='mob no.' required />
              <button onClick={addUser}  style={{color:"white", margin:"1rem", padding:".5rem", borderRadius:"5px", backgroundColor:"#a50d3a", cursor:"pointer"}} >Register</button>
            </form>
          </div>
        </div>
  )
}


export default Register