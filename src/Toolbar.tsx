import ToolbarButton from "./ToolbarButton"
import SexierSquidward from "./assets/Sexier Squidward.jpeg"

export default function Toolbar() {
    return (
        <div className="bg-light p-3 border-bottom">
            <ToolbarButton icon={SexierSquidward} onClick={() => alert("Set font color")}/>
            <ToolbarButton icon={SexierSquidward} onClick={() => alert("set font family")}/>
        </div>
    )
}