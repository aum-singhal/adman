import { FilterBar } from "../../components/filterBar/FilterBar";
import { PageHeader } from "../../components/pageHeader/PageHeader";
import "./advertisements.css";


export const Advertisements = () => {
  return <div className="advertisements">
    <PageHeader name={"Advertisements"} />
    <FilterBar name={"Create new Ad"} />
  </div>
}