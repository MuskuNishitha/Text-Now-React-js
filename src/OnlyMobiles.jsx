import React from 'react'
import { GetstatedButton } from './GetstatedButton'

export const OnlyMobiles = () => {
  let obj1={
      color:"black"
  }
  return (
   
    <>
    <div id="onlymobiles">
<p>Phone service without the phone bill</p>
<h1>TextNow is the only mobile provider to<br></br>er nationwide phone service for free — <br></br>always. Download the app to call and text<br></br> without ever having to pay a phone bill. </h1>
<GetstatedButton  p="Get Started" obj2={obj1}/>
    </div>
    
    </>
  )
}
