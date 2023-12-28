import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./advertisements.css";
import { OverlayForm } from "../../components/overlayForm/OverlayForm";


export const Advertisements = () => {
  const adData = {};

  const formField = {
      heading: {title: "Ad Details", type: "text", line: "heading"},
      name: {title: "name", type: "text", max_limit: 0, line: "single" },
      client: {title: "client", type: "text", max_limit: 10, line: "single" },
      plan: {title: "plan", type: "text", max_limit: 0, line: "single" },
      file: {title: "upload media", type: "upload"}
  };

  const [openForm, setOpenForm] = useState(false);
  return <AnimatePage>
        <div className="advertisements">
        <PageHeader name={"Advertisements"} />
        <FilterBar name={"Create new Ad"} setOpenForm={setOpenForm} />
        {JSON.stringify(adData)==="{}"?<ZeroScreen setOpenForm={setOpenForm} text={"There is no advertisement yet"}/>:<Table data={adData}/>}

        {openForm==true? <OverlayForm title={"Create an Advertisement"} data={formField} setOpenForm={setOpenForm} />:""}

      </div>
    </AnimatePage>
}