import React, { useRef, useEffect } from "react";
import "./OverlayForm.css";

import close from "../../assets/icons/close.png";


export const OverlayForm = ({data, title, setOpenForm}) => {
  const nodeRef = useRef(null);
  const handleClickOutside = event =>{
    if(nodeRef.current && 
      !nodeRef.current.contains(event.target)) {
        return setOpenForm(false);
      }
    };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
    document.removeEventListener("click", handleClickOutside, true);
   };
  })

  return <div className="overlay-form">
    <form className="form" ref={nodeRef}>
      <div className="head">
        <div className="font-20 semi-bold text-title">&nbsp;&nbsp;{title}</div>

        <img src={close} onClick={()=>{setOpenForm(false)}} alt="close button" className="cursor-pointer" />
      </div>
      <div className="input-area">
        {
          Object.keys(data).map(key =>{
            return <div className="inputs flex-a-cen" key={key}>

              <div className="left font-16 medium-bold text-title">
                {
                  data[key]["line"]==="text"?(
                    <span className="font-18">{data[key]['left']}</span>
                  ):data[key]["title"]
                }
              </div>

              <div className="right">
                {
                  data[key]["line"]==="single"?(
                    <input 
                      maxLength={data[key]['max_limit']===0?"":data[key]['max_limit']} 
                      required 
                      type={data[key]["type"]} 
                      id={key} 
                    />
                  ): data[key]["line"]==="text"?(
                    <div className="text-right font-14">
                      <span className="right-title medium-bold">{data[key]["right_title"]}</span>
                      <span className="right_data color-blue">{data[key]["right_data"]}</span>
                    </div>
                  ):<textarea rows={4} required placeholder=""></textarea>
                }
              </div>

            </div>
          })
        }
      </div>
      <button type="Submit" className="font-16 medium-bold">Create</button>
    </form>
  </div>
}