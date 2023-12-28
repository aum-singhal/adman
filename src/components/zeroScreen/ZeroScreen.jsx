import React from "react";
import "./zeroScreen.css";

import zero from '../../assets/zero_screen_icon.png'


export const ZeroScreen = ({text, setOpenForm, disableCreate, redirect, func}) => {
  const onClickFunc = () => {
    if(redirect===true){func()}
    else{setOpenForm(true)}
  }
  return <div className="zero-screen">
    <img src={zero} alt="Zero Screen" />

    {text}

    {disableCreate===true?"":<button onClick={onClickFunc} className="font-14 medium-bold">Create</button>}
  </div>
}