import React, {useState, useEffect, useRef} from 'react'
import SideBar from './SideBar'
import FormSlide from './FormSlide'

function FormSection() {

  const [idx, setIdx] = useState(0)
  const [transit, setTransit] = useState(null)
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)
  const componentRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentScrollPosition = componentRef.current.scrollTop;
      const maxScrollPosition =
        componentRef.current.scrollHeight -
        componentRef.current.clientHeight;
      const scrollPercentage = (currentScrollPosition / maxScrollPosition) * 100;
      setScrollPosition(scrollPercentage);
    };

    componentRef.current.addEventListener("scroll", updateScrollPosition);
    return () => {
      componentRef.current.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  const handlePrevClick = () => {
    componentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTransit("prev")
    if(idx - 1 >= 0){
      setDisabledNext(false)
      setIdx(idx-1)
    }
    if(idx) setDisabledPrev(true)
    console.log(idx)
  }

  const handleNextClick = () => {
    componentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTransit("next")
    if(idx + 1 < 2){
      setDisabledPrev(false)
      setIdx(idx+1)
    }
    if(!idx) setDisabledNext(true)
    console.log(idx)
  }

  return (
    <div className='form-section'>
      <div
        className="progress-bar"
        style={{ width: `${scrollPosition}%` }}
      ></div>
      <SideBar></SideBar>
      <div className={`form-section-content`} ref={componentRef}>
          <FormSlide props = {idx+1} classes={transit}/>
          <FormSlide props = {idx+1} classes={transit}/>
          <FormSlide props = {idx+1} classes={transit}/>
          <FormSlide props = {idx+1} classes={transit}/>
        <div className='form-btn-group'>
          <button className='my-btn' disabled={disabledPrev} onClick={handlePrevClick}>Previous</button>
          <button className='my-btn' disabled={disabledNext} onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default FormSection