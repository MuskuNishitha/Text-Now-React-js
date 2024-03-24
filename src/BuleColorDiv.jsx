import React from 'react'
import img from './images/bluecolor.gif'
import singnal from './images/single5g.svg'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
export const BuleColorDiv = () => {
  return (
<>
<div>
<div id="blucoloe">
    <div> 
        <div id="contentdivb">
          <button>  <img src={singnal} alt='error'></img></button>
            <h1>Get strong 5G/LTE coverage you can count on across the U.S.</h1>
        </div>
        <h6 id="h6check"> Check Coverage  <TrendingFlatIcon /></h6>

        <div>
            <hr  id="hrrr"></hr>
            <p>TextNow is backed by the nation’s largest 5G network to provide <br/>you with the best wireless experience.</p>
        </div>
    </div>
    <div>
        <img src={img} alt='error' id="imghigdhe"></img>
    </div>
</div>
</div>

</>
  )
}
