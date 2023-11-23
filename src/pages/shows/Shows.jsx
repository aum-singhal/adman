import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./shows.css";
import { useNavigate } from "react-router-dom";


export const Shows = () => {
  const showData = {}
  const [openForm, setOpenForm] = useState(false);
  const nav = useNavigate();
  const func = () => {nav("/shows/show-details")};
  return <AnimatePage>
    <div className="shows">
      <PageHeader name={"Shows"} />
      <FilterBar setOpenForm={setOpenForm} redirect={true} func={func} name={"Create new Show"} />
      {JSON.stringify(showData)==="{}"?<ZeroScreen redirect={true} func={func} setOpenForm={setOpenForm} text={"There is no Show yet"}/>:<Table data={showData}/>}
    </div>
  </AnimatePage>
}