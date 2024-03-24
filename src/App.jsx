import React from 'react'
import { Navbar } from './Navbar'
import './index.css'
import { TopPage } from './TopPage'
import { OnlyMobiles } from './OnlyMobiles'
import { DownArrow } from './DownArrow'
import { PhoneDivTag } from './PhoneDivTag'
import { ServiceWay } from './ServiceWay'
import { TwoDivsTags } from './TwoDivsTags'
import { BuleColorDiv } from './BuleColorDiv'
import { GreenColorContent } from './GreenColorContent'
import { BetterWay } from './BetterWay'
import {Footer} from './Footer'
export const App = () => {
  return (
<>
<div id="mainnavbar">
<Navbar />
</div>
<div style={{top:"100px",position:"relative"}}>
  <TopPage />
</div>
<div id="blackcolordiv">
  <OnlyMobiles />
</div>
<div id="downarrowcontent">

  <DownArrow />
</div>
<div id="phonesmoncal">
  <PhoneDivTag />
</div>
<div id="secverqw">
  <ServiceWay />
</div>
<div id="twodivs">
  <TwoDivsTags />
</div>
<div id="colorbluediv">

  <BuleColorDiv />
</div>
<div id="greenconrent">
<GreenColorContent />
</div>
<div id="bettterway">

  <BetterWay />
</div>
<div id="footerrrrrr">
  <Footer/>
</div>
</>
  )
}
