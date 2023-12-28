import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./reports.css";
import { useNavigate } from "react-router-dom";


export const Reports = () => {
  const reportData = {}
  const [openForm, setOpenForm] = useState(false)
  const nav = useNavigate()
  const func=()=>{nav("/reports/create")}
  return <AnimatePage>
    <div className="reports">
      <PageHeader name={"Reports"} />
      <FilterBar setOpenForm={setOpenForm} redirect={true} func={func} name={"Create new Report"} />
      {JSON.stringify(reportData)==="{}"?<ZeroScreen redirect={true} func={func} setOpenForm={setOpenForm} text={"There is no Report yet"}/>:<Table data={reportData}/>}
    </ div>
  </AnimatePage>
}