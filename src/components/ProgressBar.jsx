import React from "react";

function ProgressBar(props){

    let h=props.completed/props.total;
    h=h*100;
    h=h.toString();
    console.log(h);

    const str=h+"%"
    console.log(str);
    return <div className="outerProgressBar">
        <div className="innerProgressBar" style={{width : str}}>

        </div>
    </div>
    
}
export default ProgressBar;