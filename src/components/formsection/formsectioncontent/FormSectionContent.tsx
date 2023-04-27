import { ButtonDiv, FormSectionContentDiv } from "./styled";
import FormSlide from "./formslide/FormSlide";
import info from "@/assests/info/info";
import { useState } from "react";
import {Button} from '@/components/Button'
import { useMemo } from "react";

export default function FormSectionContent({theme, refv, compref}){
    const [areSlidesValid, setAreSlidesValid] = useState(false)
    let slideArr = useMemo(() => (info.map(() => false)), [])

    const validateSlides = (idx, validity) => {
        slideArr[idx] = validity
        console.log("Slides : ", slideArr)
        if(slideArr.every((elem) => elem === true))
            setAreSlidesValid(true)
        else setAreSlidesValid(false)
    }
    const slides = info.map((elem, idx) => <FormSlide validateSlide={validateSlides} theme={theme} refv={refv} idx={idx} key={idx*2} props={elem}></FormSlide>)

    return <FormSectionContentDiv ref={compref}  $theme={theme}>
            {slides}
            <ButtonDiv>
                <Button $theme={theme} $disabled={!areSlidesValid}>
                    Continue To Verification
                </Button>
            </ButtonDiv>
        </FormSectionContentDiv>
}
