import React, { useState } from "react";
import "./showDetails.css";
import { PageHeader } from "../../../components/pageHeader/PageHeader";
import addButton from "../../../assets/icons/add_circle.png";


export const ShowDetails = () => {
  const [shows, setShows] = useState(true);
  return <div>
    {shows===true ? <ShowsPage setShows={setShows} /> : <CreateHierarchy />}   
  </div>
}

const ShowsPage = ({setShows}) => {
  return <div className="show-details">
    <PageHeader name={"Shows"} />
    <div className="font-16 medium-bold text-align-left">Show Details</div>

    <div className="container">
      <div className="left">
        <div className="field">
          <div className="font-14">Show Id</div>
          <div className="font-12 text-align-left">12312</div>
        </div>
        <div className="field">
          <div className="font-14">Show Name</div>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field">
          <div className="font-14">Advertisement</div>
          <input type="text" name="ad" id="ad" />
        </div>
        <div className="field">
          <div className="font-14">Duration</div>
          <input type="text" name="duration" id="duration" />
        </div>
        <div className="field">
          <div className="font-14">Effects</div>
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="right">
        <div className="font-14 medium-bold text-align-left">Preview</div>
        <div className="preview flex-a-cen-j-cen">
          <div className="default font-48">PREVIEW</div>
        </div>
        <br />
        <div className="applicable flex-a-cen">
          <div className="font-14">Applicable on</div>

        </div>
        <div onClick={()=> setShows(false)} className="add-hierarchy flex-a-cen-j-fend text-right cursor-pointer">
          <img src={addButton} alt="add button" /> &nbsp;
          <div className="font-14 medium-bold">Add new heirarchy</div>
        </div>
      </div>
    </div>

    <button>Create</button>
  </div>
}

const  CreateHierarchy = () => {
  return <div className="create-heirarchy">
    <PageHeader name={'Shows'} />
    <div className="font-22 medium-bold">Applicable on</div>
    <div className="container-border">
      <div className="font-14 medium-bold">Choose outlets</div> <br />
      <div className="container flex-a-cen">
        <div className="left">
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">Country</div>
            <div className="dropdown"></div>
          </div>
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">State(s)</div>
            <div className="dropdown"></div>
          </div>
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">Outlet(s)</div>
            <div className="dropdown"></div>
          </div>
        </div>
        <div className="right">
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">Area(s)</div>
            <div className="dropdown"></div>
          </div>
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">Zone(s)</div>
            <div className="dropdown"></div>
          </div>
          <div className="field flex-a-cen-spbet">
            <div className="font-14 medium-bold">Machine(s)</div>
            <div className="dropdown"></div>
          </div>
        </div>
      </div>
    </div>
    <button className="font-12 medium-bold">Apply</button>
  </div>

}