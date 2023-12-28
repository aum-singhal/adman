import React, { useRef, useEffect, useState } from "react";
import "./OverlayForm.css";

import close from "../../assets/icons/close.png";


export const OverlayForm = ({data, title, setOpenForm}) => {
  const nodeRef = useRef(null);
  const inputFileRef = useRef(null);
  const [prev, setPrev] = useState(false);

  const handleClickOutside = event =>{
    if(nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setOpenForm(false);
    }
  };

  const openFile = () =>{
    inputFileRef.current.click();
  }

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
                    <span className="font-18 medium-bold">{data[key]['left']}</span>
                  ):data[key]["line"]==="heading"?(
                    <span className="font-18 medium-bold">{data[key]["title"]}</span>
                  ):data[key]["title"]
                }
              </div>

              <div className="right">
                {
                  data[key]["line"]==="heading"? "" : data[key]["type"]==="upload"?(
                    <div className="upload-file">
                      <div className="top">
                        <input type="file" name="" id="" ref={inputFileRef} onChange={()=>setPrev(true)} style={{"display":"none"}} />
                        <button onClick={()=>openFile()}>Choose a file</button>
                        <span className="font-14 medium-bold"></span>
                      </div>
                        {/* {inputFileRef.current.value===""? "" : <video width={"400"} controls>
                          <source src={URL.createObjectURL(inputFileRef.current.value)}/>
                        </video>} */}
                        {prev === false? "" : <video width={"400"} controls>
                          <source src={window.URL.createObjectURL(new Blob(inputFileRef.current.value, {type: "video/mp4"}))} /></video>}
                    </div>
                  ) : data[key]["line"]==="single"?(
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