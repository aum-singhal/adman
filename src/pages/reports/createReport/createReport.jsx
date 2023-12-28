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

        

      </div>
      <div className="right">
        <div className="report-sec text-align-left">
          <div className="font-12">Report Name</div>
          <div className="font-12">10/12/2023 2:55pm</div>

        </div>
      </div>
    </div>
  </div>
}