import { useRef, useContext } from "react";
import React from "react";
import { UserContext } from "../App";

export default function DrumPad(props){
    const audio = useRef(null)

    const value = useContext(UserContext); 

    document.addEventListener("keydown", (e)=>{
        try{
            if(e.key.toLowerCase() === props.value.toLowerCase()){;
                playSound()
            }
        }
        catch{
            return
        }
    } )

    const playSound = () =>{
        value.setPlayed(props.id)
        audio.current.volume = value.volume/100
        audio.current.play()
    }

    return(

        <div onClick={()=>{ playSound()}} className="drum-pad" id={props.id}>
            {props.value}
            <audio ref={audio}  className="clip" id={props.value} src={props.sound}></audio>
        </div>
    )
}