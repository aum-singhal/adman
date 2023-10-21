import { AnimatePage } from "../../components/animatepage";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./shows.css";


export const Shows = () => {
  const showData = {}

  return <AnimatePage>
    <div className="shows">
      <PageHeader name={"Shows"} />
      <FilterBar name={"Create new Show"} />
      {JSON.stringify(showData)==="{}"?<ZeroScreen text={"There is no Show yet"}/>:<Table data={showData}/>}
    </div>
  </AnimatePage>
}