import { useRef, useEffect, useState } from "react";
import SideBar from "./sidebar/SideBar";
import FormSectionContent from "./formsectioncontent/FormSectionContent";
import { FormContainer, ProgressBar} from "./styles";
import FormSlide from "./formsectioncontent/formslide/FormSlide";
import info from "@/assests/info/info";

export default function FormSection({theme, mobile, handleMobile}){

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
    let temp = componentRef
    return () => {
      temp.current.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  function handleScroll(slideIdx, cardIdx) {
        const child = refv[slideIdx].current.children[1].children[cardIdx]
        componentRef.current.scrollTo({
            top : (child.offsetTop - 110),
            behavior : "smooth"
        })
  }

    const slides = info.map((elem, idx) => <FormSlide theme={theme} refv={refv} idx={idx} key={idx*2} props={elem}></FormSlide>)
    return(
        <FormContainer $theme={theme}>
            <ProgressBar width={scrollPosition}/>
            <SideBar handleMobile={handleMobile} mobile={mobile} handleScroll={handleScroll} theme={theme}/>
            <FormSectionContent compref={componentRef} slides={slides} theme={theme} />
        </FormContainer>
    )
}