import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext()

const PlayerContextProvider = (props)=>{

    const audioref = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,settrack] = useState(songsData[0])
    const [playStatus,setPlayStatus] = useState(false);
    const [time,SetTime] = useState({
        currenTime:{
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