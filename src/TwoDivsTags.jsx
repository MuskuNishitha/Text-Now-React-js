import React from 'react'

import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TagIcon from '@mui/icons-material/Tag';
import img1 from './images/phone.svg'
import img2 from './images/phonesideimage.svg'
export const TwoDivsTags = () => {
  return (
<>
<div id="content">
    {
     divContent.map((ele,index)=>{
        let {btn,h1,h2,img,p}=ele
        return(
       <Div btn={btn} h1={h1} h2={h2} img={img} p={p} keys={index}/>
        )
     })   
    }
</div>
</>
  )
  
}
let divContent=[

    {
btn:<SystemSecurityUpdateGoodIcon/>,
h1:"Bring your ",
h2:"own  number.....",
img:img1,
p:"Bring your Existing number and never miss a call. There's no fee to port in your number."
    },
    {
btn:<TagIcon/>,
h1:" or get  a ",
h2:"new One !",
img:img2,
p:"Choose a free local TextNow phone number to stya in touch with family and friends or add a line for everything"
    }
]

let Div=(props)=>{
    let{btn,h1,h2,img,p}=props
    return(
        <>   
       <div id="normaldivtag">
          <div id="getone">
            <button>{btn}</button>
            <h1>{h1} <br/>{h2}</h1>
          </div>
        <div>
<img src={img} alt='error'></img>
        </div>
<hr/>

<p>{p}</p>

        
        </div> 
        
        </>
    )
}
