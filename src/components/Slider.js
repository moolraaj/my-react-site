import React from 'react'
 
import SwiftSlider from 'react-swift-slider'
 
 
import 'react-awesome-slider/dist/styles.css';
 function Slider() {

  const data =  [
    {'id':'1','src':'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg'},
    {'id':'2','src':'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
    {'id':'3','src':'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
    {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
    {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
  ];
  
   return (
    <>
    
 <h1>slider</h1>
 <SwiftSlider data={data} height={700} interval={2500} activeDotColor='#000'/>
 
  

    </>
  )
}

export default Slider