import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import img1 from './images/icon.svg'
export const Navbar = () => {
  return (
 <>
 <div id="navbar">

<div id="icons">
    <img src={img1} alt='error'></img>
</div>
<div >
<div id="flexnav">
{
   para.map((ele,index)=>{
    return <P p={ele} keys={index}></P>
   }) 
}
<div id="searchicon"><SearchIcon /></div>
</div>

</div>

 </div>
 
 </>
  )
}

let P=(props)=>{
    return(
        <>
        <p>{props.p}</p>
        
        </>
    )
}
let para=["Fire Wireless" ,"Data" ,"Coverage" ,"Activate SIM"]