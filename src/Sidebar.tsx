import SlideThumbnail from "./SlideThumbnail"
import SexierSquidward from "./assets/Sexier Squidward.jpeg"

const slides =[
    {
        id: 0,
        order: 1,
        image: SexierSquidward
    },
    {
        id: 1,
        order: 2,
        image: SexierSquidward
    },
    {
        id: 2,
        order: 3,
        image: SexierSquidward
    }
]

export default function Sidebar() {
    return (
    <div className="border-end bg-light p-3 d-flex flex-column">
        { slides.map( s => <SlideThumbnail key={s.id} slide={ s }/> )}
        <SlideThumbnail slide={slides[0]}/>
        <SlideThumbnail slide={slides[1]}/>
        <SlideThumbnail slide={slides[2]}/>
    </div>
    )
}