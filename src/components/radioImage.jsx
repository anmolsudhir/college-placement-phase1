import React from "react";
function ImageRadio(props){
    
    if(props.completed===props.total)
    { return <img src={require("./radiochecked.png")} alt="radio button" style={{height : "30px",width : "30px",position : "relative" , marginTop : "auto",marginBottom : "auto"}}/>}
    else
    {
        return <img src={require("./radiounchecked.png")} alt="radio button" style={{height : "30px",width : "30px",position : "relative" , marginTop : "auto",marginBottom : "auto"}}/>}
    }
   
export default ImageRadio;