import React from 'react'
import img1 from './images/appstore.svg'
import img2 from './images/google.svg'
import img3 from './images/googlepay.svg'

import i1 from './images/i1.svg'
import i2 from './images/i2.svg'
import i3 from './images/i3.svg'
import i4 from './images/i4.svg'
import i5 from './images/i5.svg'
import i6 from './images/i6.svg'
import i7 from './images/i7.svg'
import i8 from './images/i8.svg'
import i9 from './images/i9.svg'

export const TopPage = () => {
  let obj1={
    top:"300px",
    position:"absolute",
    marginLeft:"-450px"
  }
  let obj3={
    top:"500px",
    position:"absolute",
    marginLeft:"-480px"
  }
  let obj2={
    top:"390px",
    position:"absolute",
    marginLeft:"-200px"
  }
  let obj4={
    top:"550px",
    position:"absolute",
    marginLeft:"-200px"
  }
  let obj5={
    top:"180px",
    position:"absolute",
    marginLeft:"500px"
  }

  let obj6={
    top:"250px",
    position:"absolute",
    marginLeft:"700px"
  }
  let obj7={
    top:"300px",
    position:"absolute",
    marginLeft:"400px"
  }
  let obj8={
    top:"390px",
    position:"absolute",
    marginLeft:"450px"
  }

  let obj9={
    top:"450px",
    position:"absolute",
    marginLeft:"600px"
  }

  return (
    <>
    <div id="divtagaaa">
    </div>
    <div id="topvalues">
        <div id="whitecolor">

        </div>
        <h1>Never pay a <br></br> phone bill again.</h1>
        <div id="divtaginages">
            { 
              images.map((ele)=>{
       return <Image img={ele} />
              })  
            }
        </div>


        <div>
          <Img  img={i1} obj={obj1}/>
          <Img  img={i2}  obj={obj2}/>
          <Img  img={i3}  obj={obj3}/>
          <Img  img={i4} obj={obj4}/>
          <Img  img={i5} obj={obj5}/>
          <Img  img={i6} obj={obj6}/>
          <Img  img={i7} obj={obj7}/>
          <Img  img={i8} obj={obj8}/>
          <Img  img={i9} obj={obj9}/>
        </div>
    </div>
    </>
  )
}

let images=[img1,img2,img3]
let Image=({img})=>{
    return(
        <>
        <div>
            <img src={img} alt='error'></img>
        </div>
        </>
    )
}
let Img=(prop)=>{
  return(
    <>
    <div>
      <img src={prop.img} alt='error' style={prop.obj}></img>
    </div>
    </>
  )
}