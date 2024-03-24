import React from 'react'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export const GetstatedButton = (props) => {
  return (
<>
<button id="btn_All" style={props.style}><p style={props.obj2}>{props.p}</p><span><TrendingFlatIcon /></span></button>

</>
  )

  }