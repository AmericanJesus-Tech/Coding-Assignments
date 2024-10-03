import { useState } from "react"
import Toolbar from "./Toolbar"
import SlideView from "./SlideView"
import Sidebar from "./Sidebar"
import SexierSquidward from "./assets/Sexier Squidward.jpeg"
import { Slide } from "./types"

const TestSlides =[
  {
      id: 0,
      order: 1,
      image: SexierSquidward,
      text: "Sexy Squidward",
      fontColor: "black"
  },
  {
      id: 1,
      order: 2,
      image: SexierSquidward,
      text: "Sexy Squidward",
      fontColor: "black"
  },
  {
      id: 2,
      order: 3,
      image: SexierSquidward,
      text: "Sexy Squidward",
      fontColor: "black"
  }
]

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(TestSlides)
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  const selectedSlide = slides.find(s => s.id === selectedSlideId)

  const addBlankSlide = () => {
    const blankSlide = {
        id: slides.length ? slides[slides.length - 1].id + 1 : 0,
        order: 4,
        image: SexierSquidward,
        text: "Sexy Squidward",
        fontColor: "black"
    }

    setSlides( [ ...slides, blankSlide ] )
  }

  const deleteSlide = (idToDelete: number) => {
    setSlides( slides.filter(s => s.id !== idToDelete))
  }

  const updateSlideFontColor = (newColor: string, idToUpdate?: number) => {
    setSlides(slides.map(slide => (
      slide.id !== idToUpdate ? slide : {
        ...slide,
        fontColor: newColor
      }
    )))
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Toolbar selectedSlide={selectedSlide} addBlankSlide = {addBlankSlide} updateSlideFontColor={updateSlideFontColor}/>
      <div className="d-flex flex-grow-1">
        <Sidebar 
        slides={slides} 
        deleteSlide={deleteSlide}
        selectedSlideId={selectedSlideId} 
        setSelectedSlideId={setSelectedSlideId}/>
        <SlideView slide={selectedSlide}/>
      </div>
    </div>
  )
}