import { useState } from 'react';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';


export const Sidebar = () => {
    const [selected, setSelected] = useState(1);
    const nav = useNavigate();

    return <div className="sidebar">
        <div className="heading semi-bold">Adman</div>
        <div className="nav-list medium-bold">
            <div onClick={()=>{setSelected(1);nav("/clients")}} className={selected===1?"nav-item selected":'nav-item'}>Clients</div>
            <div onClick={()=>{setSelected(2);nav("/plans")}} className={selected===2?"nav-item selected":'nav-item'}>Plans</div>
            <div onClick={()=>{setSelected(3);nav("/advertisement")}} className={selected===3?"nav-item selected":'nav-item'}>Advertisements</div>
            <div onClick={()=>{setSelected(4);nav("/shows")}} className={selected===4?"nav-item selected":'nav-item'}>Shows</div>
            <div onClick={()=>{setSelected(5);nav("/reports")}} className={selected===5?"nav-item selected":'nav-item'}>Reports</div>
            <div onClick={()=>{setSelected(6);nav("/users")}} className={selected===6?"nav-item selected":'nav-item'}>Users</div>
            <div className="hover-div"></div>
        </div>

        
    </div>
}