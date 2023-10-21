import './filterbar.css';

import filter from "../../assets/filterbar/filter.png";
import search from "../../assets/filterbar/search.png";
import expand from "../../assets/filterbar/expand.png";

export const FilterBar = ({name}) => {
  return <div className="filter-bar flex-a-cen-j-spbet">

    <div className="flex-a-cen">
      <div className="searchbox border-d9d9d9 font-14">
        <img src={search} alt="search icon" />
        <input type="text" name="" className='font-14' placeholder='Search' id="searchbox" />
      </div>

      <div className="filter border-d9d9d9 medium-bold font-14 border-radius-12">
        <img src={filter} alt="filter icon" />
        Filter
        <img className='expand' src={expand} alt="expand icon" />
      </div>
    </div>

    <button>{name}</button>

  </div>
}