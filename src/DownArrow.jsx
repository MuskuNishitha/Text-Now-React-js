import React from 'react'
import tough from './images/tough.svg'
import SouthIcon from '@mui/icons-material/South';
export const DownArrow = () => {
  return (
    <>
    <div>
        <div id="maindownArrowdiv">
            <div id="divtag1">
                <img src={tough} alt='errro' />
                <h1>Flexible unlimited data options are now available. Add a low-cost hourly, daily or monthly pass to your free service, right from the app. Pay for what you want, only when you want it.</h1>
            </div>
            <div>
                <button><span><SouthIcon /></span></button>
            </div>
        </div>
        <hr className='hr1'/>
    </div>
    </>
  )
}
