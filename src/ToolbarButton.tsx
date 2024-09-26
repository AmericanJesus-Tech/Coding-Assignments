
type ToolbarButtonProps = {
    icon: string, 
    onClick: () => void
}

export default function ToolbarButton({ icon, onClick }: ToolbarButtonProps) {
  
    return (
        <button 
            className="btn btn-outline-secondary" 
            onClick={onClick}
        > 
            <img src={icon} style={{width: "2rem"}}/>
        </button>
    )
}