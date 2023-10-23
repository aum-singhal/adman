import { useState } from "react";
import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./shows.css";


export const Shows = () => {
  const showData = {}
  const [openForm, setOpenForm] = useState(false);
  return <AnimatePage>
    <div className="shows">
      <PageHeader name={"Shows"} />
      <FilterBar setOpenForm={setOpenForm} name={"Create new Show"} />
      {JSON.stringify(showData)==="{}"?<ZeroScreen setOpenForm={setOpenForm} text={"There is no Show yet"}/>:<Table data={showData}/>}
    </div>
  </AnimatePage>
}