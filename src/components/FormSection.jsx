import React, {useState, useEffect, useRef} from 'react'
import SideBar from './SideBar'
import FormSlide from './FormSlide'
import info from '../assests/info/info'

function FormSection({theme}) {
  const [transit, setTransit] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const componentRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  let refv = []
  refv.push(ref1)
  refv.push(ref2)
  refv.push(ref3)
  refv.push(ref4)
  refv.push(ref5)

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

  function handleScroll(slideIdx, cardIdx) {
    const child = refv[slideIdx].current.children[1].children[cardIdx]
    componentRef.current.scrollTo({
      top : (child.offsetTop - 110),
      behavior : "smooth"
    })
    setTimeout(() => 
      child.children[1].focus(), 
      1000
    ) 
  }

  const slides = info.map((elem, idx) => <FormSlide refv={refv} idx={idx} key={idx*2} props={elem} classes={transit}></FormSlide>)

  return (
    <div className='form-section'>
      <div
        className="progress-bar"
        style={{ width: `${scrollPosition}%` }}
      ></div>
      <SideBar theme={theme} info = {info} handleScroll = {handleScroll}></SideBar>
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