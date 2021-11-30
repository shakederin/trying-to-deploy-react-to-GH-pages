import DrumPad from "./DrumPad";
import { sounds } from "../sounds/sounds";
export default function PadBunk(props){


    return(
        <div className="pad-Bank">
            <DrumPad sound = {sounds.hiHat} value="Q" id="Hi-Hat"/>
            <DrumPad sound = {sounds.snare} value="W" id="Snare" />
            <DrumPad sound = {sounds.grind} value="E" id="grind" />
            <DrumPad sound = {sounds.clap} value="A" id="Clap" />
            <DrumPad sound = {sounds.bass} value="S" id="Bass" />
            <DrumPad sound = {sounds.rimshot} value="D" id="Rim-Shot" />
            <DrumPad sound = {sounds.closedHiHat} value="Z" id="ClosedHiHat" />
            <DrumPad sound = {sounds.openHiHat} value="X" id="openHiHat" />
            <DrumPad sound = {sounds.beat} value="C" id="Floor" />
        </div>
    )
}