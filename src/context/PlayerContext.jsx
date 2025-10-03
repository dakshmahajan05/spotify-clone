import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props)=>{

    const audioref = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,settrack] = useState(songsData[0])
    const [playStatus,setPlayStatus] = useState(false);
    const [time,SetTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

        const play = ()=>{
            audioref.current.play();
            setPlayStatus(true)
        }

         const pause = ()=>{
            audioref.current.pause();
            setPlayStatus(false)
        }

        useEffect(()=>{
            setTimeout(() => {
                audioref.current.ontimeupdate=()=>{
                    SetTime({
                         currentTime:{
                            second:Math.floor(audioref.current.currentTime%60),
                            minute:Math.floor(audioref.current.currentTime/60)
                        }, 
                        totalTime:{
                            second:Math.floor(audioref.current.duration%60),
                            minute:Math.floor(audioref.current.duration/60),
                        },  
                        })
                }
            }, 1000);
        },[audioref])

    const contextValue = {
        audioref,seekBar,seekBg,track,settrack,playStatus,setPlayStatus,time,SetTime,play,pause
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;