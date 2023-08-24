import React, { useState } from 'react'
import useSound from 'use-sound'
import song from './mysong/Stay With Me - Instrumental.mp3'
function Mysong() {


    const [playing, setPlaying] = useState(false)
    const[play,{pause}]=useSound(song)

    const toggleSong=()=>{
        if(playing){
            pause()
             setPlaying(false)
        }else{
            play()
            setPlaying(true)
        }
    }


  return (
  <>
  <h1>welcome to my song component play and pause song</h1>
  <div className=''>
    <button onClick={toggleSong}>{playing?'pause':'play'}</button>
  </div>
  </>
  )
}

export default Mysong