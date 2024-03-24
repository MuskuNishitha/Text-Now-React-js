import React from 'react'
import { GetstatedButton } from './GetstatedButton'
import img1 from './images/women.jpeg'
import img2 from './images/Moncalling.png'
export const PhoneDivTag = () => {
  return (
    <>
    <div>
        <div>
        <img src={img1} alt="error" id="women"/>
        <img src={img2} alt="error"/>
        </div>
        <div id="contentdiv" style={{marginLeft:"1000px"}}>
            <h1>Phone <br></br>service made<br></br> simple.</h1>

            <ul>
 {
    lipara.map((ele,index)=>{
return <Li li={ele.para} keys={index}/>
    })
 }
            </ul>
            <GetstatedButton  p="Get Started" />
        </div>
    </div>
    
    </>
  )
}




let lipara=[
    {
para:"Download the TextNow app and create your account"
    },
    {
para:"Get a new phone number, or use your existing one"
    },
    {
        para:"Text and call for free on Wi-Fi, instantly"
    },
    {
        para:"Order a SIM card to get free nationwide talk and text, and add unlimited data plans when you need it"
    }
]

let Li=(props)=>{
    return(

<>
<li>{props.li}</li>
</>

    )
}