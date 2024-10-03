import { Button, Modal, Stack } from "react-bootstrap"
import ToolbarButton from "./ToolbarButton"
import SexierSquidward from "./assets/Sexier Squidward.jpeg"
import { useState } from "react"
import type { Slide } from "./types"

type ToolBarProps = {
    addBlankSlide: () => void
    updateSlideFontColor: (color: string, id?: number) => void
    selectedSlide?: Slide
}

export default function Toolbar({ addBlankSlide, updateSlideFontColor, selectedSlide}: ToolBarProps) {
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)

    const handleClose = () => setIsColorModalOpen(false)

    return (
        <>
            <div className="bg-light p-3 border-bottom">
                <ToolbarButton icon={SexierSquidward} onClick={addBlankSlide}/>
                <ToolbarButton icon={SexierSquidward} onClick={() => setIsColorModalOpen(true)}/>
                <ToolbarButton icon={SexierSquidward} onClick={() => alert("set font family")}/>
            </div>
            <Modal show={isColorModalOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Font Color</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={1}>
                        <Button 
                            variant={ selectedSlide?.fontColor === "red" ? "danger": "outline-danger"}
                            onClick={() => updateSlideFontColor("red", selectedSlide?.id)}>
                            Red
                        </Button>
                        <Button 
                            variant={ selectedSlide?.fontColor === "green" ? "success": "outline-success"} 
                            onClick={() => updateSlideFontColor("green", selectedSlide?.id,)}>
                            Green
                        </Button>
                        <Button 
                            variant={ selectedSlide?.fontColor === "black" ? "dark": "outline-dark"}
                            onClick={() => updateSlideFontColor("black", selectedSlide?.id)}>
                            Black
                        </Button>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}