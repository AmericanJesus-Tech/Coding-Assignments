import Toolbar from "./Toolbar"
import SlideView from "./SlideView"
import Sidebar from "./Sidebar"

export default function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Toolbar/>
      <div className="d-flex flex-grow-1">
        <Sidebar/>
        <SlideView/>
      </div>
    </div>
  )
}