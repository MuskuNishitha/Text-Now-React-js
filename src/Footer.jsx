import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import img1 from './images/iconcolorhwhite.svg'
export const Footer = () => {
  return (
<>
<div id="footer">
    <div id="h1foo">
        <h1>Get the latest on features and <br/>offers straight to your inbox. </h1>
    </div>
    <div id="longdiv">
        <p>Newsletter</p>
        <hr className='hr'/>
        <input type='text' placeholder='Email' name="email"  id="input"/>
            <hr className='hr'/>
            <p>Sing up</p>
    </div>


<div>
    <div id="divtagdisplay">
        <div>
        <img src={img1} alt='error' id="colorhiwt"></img>
        </div>
        <div>
        <Pcolor p="TextNow"/>
        {
                p1Content.map((ele,index)=>{
return <P1  p={ele} keys={index}/>
                })
            }
        </div>
        <div>
            <Pcolor p="Downloads"/>
            {
                p2Content.map((ele,index)=>{
return <P1  p={ele} keys={index}/>
                })
            }
        </div>
        <div>
            <Pcolor  p="Company"/>
            {
                p3Content.map((ele,index)=>{
return <P1  p={ele} keys={index}/>
                })
            }
        </div>
        <div>
            <Pcolor  p="Support"/>
            {
                p4Content.map((ele,index)=>{
return <P1  p={ele} keys={index}/>
                })
            }
        </div>
    </div>
</div>

<div id="btnss">
    {imgbtn.map((ele,index)=>{
return <Btn btn={ele}  keys={index} />
    })}
</div>


<div id="alldivtag">
   {content.map((ele,index)=>{
 return <P1 p={ele} keys={index} style={{color:"gray"}}></P1>
    })}
</div>
<div id="sidediv">
    {side.map((ele)=>{
       return <P1  p={ele} />

    })}
</div>

</div>


</>
  )
}


let content=["Terms to Use","privacy and policy","2G Fair Use Policy"]
let imgbtn=[TwitterIcon,FacebookIcon,InstagramIcon,LinkedInIcon]
let Btn=(prop)=>{
    return(
        <>
        <button id="btn1"><prop.btn /></button>
        </>
    )
}


let Pcolor=(prop)=>{
    return (
        <p style={{color:"#8363d0"}}>{prop.p}</p>
    )
}
let p1Content=["Get and Activation Kit","Bring My Phone","International Rates" ,"Blog"]
let P1=(props)=>{
    return(
        <>
         <p >{props.p}</p> 
        </>
    )
}
let p2Content=["Android","IOS/IPADOS","Windows" ,"macOS"]
let p3Content=["About","Careers","Advertising" ,"Press","Contact"]
let p4Content=["Vsit Online Support","Accessibility"]
let side=["2024 TextNow","All Rights Reserved"]

