import React, {useState, useEffect, useRef} from 'react'
import SideBar from './SideBar'
import FormSlide from './FormSlide'
import info from '../assests/info/info'

function FormSection() {
  const [transit, setTransit] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const componentRef = useRef(null);

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

  const handleScroll = (top) => {
    componentRef.current.scrollTo({
      top : top,
      behavior : "smooth"
    })
  }

  const slides = info.map((elem, idx) => <FormSlide key={idx*2} props={elem} classes={transit}></FormSlide>)

  return (
    <div className='form-section'>
      <div
        className="progress-bar"
        style={{ width: `${scrollPosition}%` }}
      ></div>
      <SideBar info = {info} handleScroll = {handleScroll}></SideBar>
      <div className={`form-section-content`} ref={componentRef}>
          {slides}
        <div className='form-btn-group'>
          <button className='my-btn'>Verify</button>
        </div>
      </div>
    </div>
  )
}

export default FormSection