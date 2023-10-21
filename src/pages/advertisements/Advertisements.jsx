import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import { Table } from "../../components/table/Table";
import { ZeroScreen } from "../../components/zeroScreen/ZeroScreen";
import "./advertisements.css";


export const Advertisements = () => {
  const adData = {}
  return <div className="advertisements">
    <PageHeader name={"Advertisements"} />
    <FilterBar name={"Create new Ad"} />
    {JSON.stringify(adData)==="{}"?<ZeroScreen text={"There is no advertisement yet"}/>:<Table data={adData}/>}
  </div>
}