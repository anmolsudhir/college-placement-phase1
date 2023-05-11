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
          {nBars.map((elem) => (
            <>
              <Labels $colors={colors} />
              <Bars $colors={colors}>
                <Fluid
                  $colors={colors}
                  $width={elem.status}
                ></Fluid>
                <span style={{
                    fontWeight:"300",
                    width:"100%",
                    marginTop:"0.5rem"
                }}>
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