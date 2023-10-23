import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./advertisements.css";


export const Advertisements = () => {
  const adData = {};
  const [openForm, setOpenForm] = useState(false);
  return <AnimatePage>
        <div className="advertisements">
        <PageHeader name={"Advertisements"} />
        <FilterBar name={"Create new Ad"} setOpenForm={setOpenForm} />
        {JSON.stringify(adData)==="{}"?<ZeroScreen setOpenForm={setOpenForm} text={"There is no advertisement yet"}/>:<Table data={adData}/>}
      </div>
    </AnimatePage>
}