import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import "./shows.css";


export const Shows = () => {
  return <div className="shows">
    <PageHeader name={"Shows"} />
    <FilterBar name={"Create new Show"} />
  </div>
}