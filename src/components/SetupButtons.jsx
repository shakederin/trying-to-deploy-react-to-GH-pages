import { useContext } from "react";
import { UserContext } from "../App";


export default function SetupButtons(props){
    
    const value = useContext(UserContext)

    const changeVolume = (e) =>{
        props.setVolume(e.target.value)
        console.log(props.volume);
    }
    const icon = () =>{
        if(value.volume > 50){
         return <i class="fas fa-volume-up"></i>
        }
        if( value.volume > 0){
            return <i class="fas fa-volume-down"></i>
        }
        if(value.volume < 1){
            return <i class="fas fa-volume-mute"></i>
        }
    }

    return(
       <div className="setUp">
           <input className="volumeInput" onChange={changeVolume} type="range" min="0" max="100" />
           <label htmlFor="input">{icon()}</label>
           <div id="display">{props.played}</div>
       </div>
    )
}