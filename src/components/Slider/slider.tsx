import { useSelector } from "react-redux";
import { ContainerDiv, Bars, Fluid, Labels } from "./styles";
import { RootState } from "@/redux/store/store";

export default function Slider({nBars}) {
    const colors = useSelector((state :RootState) => state.colors)
    return (
      <ContainerDiv $colors={colors}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {nBars.map((elem, idx) => (
            <>
              <Labels key={`point_${elem.label}_${idx}`} $colors={colors} />
              <Bars key={`bars_${elem.label}_${idx}`} $colors={colors}>
                <Fluid
                  key={`fluid_${elem.label}_${idx}`}
                  $colors={colors}
                  $width={elem.status}
                ></Fluid>
                <span
                  key={`label_${elem.label}_${idx}`}
                  style={{
                    fontWeight: "300",
                    width: "100%",
                    marginTop: "0.5rem",
                  }}
                >
                  {elem.label}
                </span>
              </Bars>
            </>
          ))}
          <Labels $colors={colors} />
        </div>
      </ContainerDiv>
    );
}