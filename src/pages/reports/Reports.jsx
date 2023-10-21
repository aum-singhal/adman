import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import "./reports.css";


export const Reports = () => {
  return <div className="reports">
    <PageHeader name={"Reports"} />
    <FilterBar name={"Create new Report"} />
  </div>
}