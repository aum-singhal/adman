import { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

import client from "../../assets/sidebar/client.png";
import plan from "../../assets/sidebar/plan.png";
import advertisement from "../../assets/sidebar/advertisement.png";
import show from "../../assets/sidebar/show.png";
import report from "../../assets/sidebar/report.png";
import user from "../../assets/sidebar/user.png";

export const Sidebar = () => {
    const [selected, setSelected] = useState(1);
    const nav = useNavigate();

    return <div className="sidebar">
        <div className="heading semi-bold font-22">Adman</div>
        <div className="nav-list medium-bold">
            <div onClick={()=>{setSelected(1);nav("/clients")}} className={selected===1?"nav-item selected":'nav-item'}> <img src={client} alt="" /> Clients</div>
            <div onClick={()=>{setSelected(2);nav("/plans")}} className={selected===2?"nav-item selected":'nav-item'}> <img src={plan} alt="" /> Plans</div>
            <div onClick={()=>{setSelected(3);nav("/advertisements")}} className={selected===3?"nav-item selected":'nav-item'}> <img src={advertisement} alt="" /> Advertisements</div>
            <div onClick={()=>{setSelected(4);nav("/shows")}} className={selected===4?"nav-item selected":'nav-item'}> <img src={show} alt="" /> Shows</div>
            <div onClick={()=>{setSelected(5);nav("/reports")}} className={selected===5?"nav-item selected":'nav-item'}> <img src={report} alt="" /> Reports</div>
            <div onClick={()=>{setSelected(6);nav("/users")}} className={selected===6?"nav-item selected":'nav-item'}> <img src={user} alt="" /> Users</div>
            <div className="hover-div"></div>
        </div>

        
    </div>
}