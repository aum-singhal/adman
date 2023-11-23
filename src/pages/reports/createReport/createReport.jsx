import React from "react";
import "./createReport.css";
import { PageHeader } from "../../../components/pageHeader/PageHeader";


export const CreateReport = () => {
  return <div className="create-report">
    <PageHeader name={"Reports > Create New Report"} />

    <div className="report-gen">
      <div className="left">
        <div className="name text-align-left">
          <div>Name</div>
          <input type="text" name="name" id="name" />
        </div>

        <div className="flex-a-cen-j-spbet">
          Report Fields 

          <div className="font-14 medium-bold filter">Filter</div>
        </div>

        <div className="report-fields">
          <div className="flex-a-cen-j-spbet">
            <div className="flex gap-05">
              <input type="checkbox" name="" id="" />
              <div className="font-14">Client</div>
            </div>
          </div>
          <div className="flex-a-cen-j-spbet">
            <div className="flex gap-05">
              <input type="checkbox" name="" id="" />
              <div className="font-14">Advertisement</div>
            </div>
          </div>
          <div className="flex-a-cen-j-spbet">
            <div className="flex gap-05">
              <input type="checkbox" name="" id="" />
              <div className="font-14">Plans</div>
            </div>
          </div>
          <div className="flex-a-cen-j-spbet">
            <div className="flex gap-05">
              <input type="checkbox" name="" id="" />
              <div className="font-14">Shows</div>
            </div>
          </div>
        </div>

      </div>

      <div className="right">
        <div className="report-sec text-align-left">
          <div className="font-12">Report Name</div>
          <div className="font-12">10/12/2023 2:55pm</div>

        </div>
      </div>
    </div>

    <div className="buttons">
      <button className="cancel">Cancel</button>
      <button className="create">Create Report</button>
    </div>
  </div>
}