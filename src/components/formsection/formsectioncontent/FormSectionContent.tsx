import { ButtonDiv, FormSectionContentDiv } from "./styled";
import FormSlide from "./formslide/FormSlide";
import info from "@/assests/info/info";
import { useState } from "react";
import {Button} from '@/components/Button'
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function FormSectionContent({ refv, compref}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const [areSlidesValid, setAreSlidesValid] = useState(false)
    let slideArr = useMemo(() => (info.map(() => false)), [])

    const validateSlides = (idx, validity) => {
        slideArr[idx] = validity
        if(slideArr.every((elem) => elem === true)){
            setAreSlidesValid(true)
        }
        else setAreSlidesValid(false)
    }
    const slides = info.map((elem, idx) => <FormSlide validateSlide={validateSlides} refv={refv} idx={idx} key={idx*2} props={elem}></FormSlide>)

    return <FormSectionContentDiv ref={compref}  $theme={theme}>
            {slides}
            <ButtonDiv>
                <Button $theme={theme} $disabled={!areSlidesValid}>
                    Continue To Verification
                </Button>
            </ButtonDiv>
        </FormSectionContentDiv>
}
