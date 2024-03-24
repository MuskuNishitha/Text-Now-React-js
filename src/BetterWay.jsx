import React from 'react'
import tough from './images/tough1.svg'
import { GetstatedButton } from './GetstatedButton'
export const BetterWay = () => {
    let obj1={
        color:"white",
        backgroundColor:"black",
        marginLeft:"500px"
    }
    let obj2={
        color:"white",
        fontSize:"18px",
        paddingLeft:"15px"
    }
  return (
   
    <>
    <div id="betterway">
<div>
    <img src={tough} alt='error'></img>
    <h1>The better way to <br/> phone.</h1>
<GetstatedButton p="Get started"  style={obj1} obj2={obj2}/>
</div>

    </div>
    
    </>
  )
}
