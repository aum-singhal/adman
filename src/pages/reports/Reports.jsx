import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./reports.css";


export const Reports = () => {
  const reportData = {}
  const [openForm, setOpenForm] = useState(false)
  return <AnimatePage>
    <div className="reports">
      <PageHeader name={"Reports"} />
      <FilterBar setOpenForm={setOpenForm} name={"Create new Report"} />
      {JSON.stringify(reportData)==="{}"?<ZeroScreen setOpenForm={setOpenForm} text={"There is no Report yet"}/>:<Table data={reportData}/>}
    </ div>
  </AnimatePage>
}