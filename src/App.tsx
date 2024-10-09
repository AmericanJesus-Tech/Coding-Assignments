import { useEffect, useState } from "react"
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
      fontColor: "black",
      speakerNotes: "Notes",
      fontFamily: "Verdana",
      fontSize: "14"
  },
  {
      id: 1,
      order: 2,
      image: SexierSquidward,
      text: "Sexy Squidward",
      fontColor: "black",
      speakerNotes: "Notes",
      fontFamily: "Verdana",
      fontSize: "14"
  },
  {
      id: 2,
      order: 3,
      image: SexierSquidward,
      text: "Sexy Squidward",
      fontColor: "black",
      speakerNotes: "Notes",
      fontFamily: "Verdana",
      fontSize: "14"
  }
]

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(TestSlides)
  const [selectedSlideId, setSelectedSlideId] = useState(0)

  useEffect(() => {
    document.title = `Slides (${slides.length})`
  }, [slides.length])

  const selectedSlide = slides.find(s => s.id === selectedSlideId)

  const addBlankSlide = () => {
    const blankSlide = {
        id: slides.length ? slides[slides.length - 1].id + 1 : 0,
        order: 4,
        image: SexierSquidward,
        text: "Sexy Squidward",
        fontColor: "black",
        speakerNotes: "Notes",
        fontFamily: "Verdana",
        fontSize: "14"
    }

    setSlides( [ ...slides, blankSlide ] )
  }

  const deleteSlide = (idToDelete: number) => {
    setSlides( slides.filter(s => s.id !== idToDelete))
  }

  const updateSlide = ( property: string, newValue: string, idToUpdate?: number) => {
    if (idToUpdate === undefined) {
      return
    }
    
    setSlides(currentSlides => currentSlides.map(slide => (
      slide.id !== idToUpdate ? slide : {
        ...slide,
        [property]: newValue
      }
    )))
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Toolbar 
      selectedSlide={selectedSlide} 
      addBlankSlide = {addBlankSlide} 
      updateSlide={updateSlide}
      />
      <div className="d-flex flex-grow-1">
        <Sidebar 
        slides={slides} 
        deleteSlide={deleteSlide}
        selectedSlideId={selectedSlideId} 
        setSelectedSlideId={setSelectedSlideId}/>
        <SlideView 
        slide={selectedSlide}
        updateSlide={updateSlide}
        />
      </div>
    </div>
  )
}