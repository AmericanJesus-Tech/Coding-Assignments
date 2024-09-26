
export default function SlideThumbnail({ slide }: { slide: { order: number, image: string}}) {
    return (
    <>
        <span>{slide.order}</span>
        <img src={slide.image} style={{width: "7rem"}} onClick={() => alert("Selected?")}/>
    </>
    )
}