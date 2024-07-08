import React , {useState} from 'react'
import "./Slider.css"
import Rightarrow from "../../assets/next.png"
import Leftarrow from "../../assets/back.png"

const Slider = ({data}) => {
    const [slide , setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length -1 ? 0 : slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length -1 : slide - 1);
    }

  return (
    <div className='carousel'>
      <h2>კამპუსი</h2>
       
        <img src={Rightarrow} className='arrow arrow-right' onClick={nextSlide} />
        <img src={Leftarrow} className='arrow arrow-left' onClick={prevSlide}/>
        
          {data.map((item, idx) => {
              return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
          })}

       
    </div>
  )
}

export default Slider