import React from "react";
import "./zeroScreen.css";

import zero from '../../assets/zero_screen_icon.png'


export const ZeroScreen = ({text}) => {
  return <div className="zero-screen">
    <img src={zero} alt="Zero Screen Image" />

    {text}

    <button className="font-14 medium-bold">Create</button>
  </div>
}