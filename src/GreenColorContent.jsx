import React from 'react'
import img1 from './images/img1.svg'
import img2 from './images/img2.svg'
import img3 from './images/img3.svg'
export const GreenColorContent = () => {
  return (
    <>
    <div id="greencolor">
        <div>
            <h1>Learn why over 100 Million people have<br/> chosen TextNow</h1>
            < div id="diplaygree">
 
                {contentsDvs.map((ele,index)=>{
                    return <DivThrees  p={ele.para} img={ele.img} keys={index}/>
                })}
            </div>
        </div>
    </div>
    </>
  )
}
let DivThrees=(props)=>{
    let {p,img}=props
    return(
        <div>
            <p>{p}</p>
            <img  src={img} alt='error'/>
        </div>
    )
}

let contentsDvs=[
    {
para:`"Honestly this is the best carrier I've ever had. I choose TextNow over other paid services."`,
img:img1 
    },
    {
        para:`"It works just like any phone carrier but you have no surprise fees, bills, or contracts to sign."`,
        img: img2
        
    },
    {
        para:`“TextNow is the best thing to happen to the phone service industry.”`,
        img:img3
    }
]