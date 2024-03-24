import React from 'react'
import hotspot from './images/hotspot.svg'
import div1 from './images/div1.svg'
import div2 from './images/div2.svg'
import div3 from './images/div3.svg'

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
export const ServiceWay = () => {
  return (
    <>
    <div id="servieway">

<div>
<h1>Your phone service, your way</h1>
<div id="divtagsssserviec"> 
    <div>
        <div id="imgdivtag">
            <button>
            <img src={hotspot} alt='error'></img></button>
            <h3>New ! Unlimited Data</h3>
        </div>
        <div id="viewdata">
            <p>View  Data Passes</p><TrendingFlatIcon/> 
        </div>
        <div id="hrlinesp">
            <hr  id="hrrr"></hr>
            <p>TextNow is backed by the nation’s largest 5G network to provide <br/>you with the best wireless experience.</p>
        </div>
    </div>
    <div>
{
   images.map((ele,index)=>{
return  <Image img={ele} keys={index}/>
   }) 
}
    </div>
</div>

</div>

    </div>
    
    </>
  )
}

let images=[div3]
let Image=(props)=>{
return(
    <div>
        <img src={props.img} alt='error' style={{marginRight:"400px"}}></img>
    </div>
)

}
