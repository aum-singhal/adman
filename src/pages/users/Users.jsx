import React, { useState } from 'react'
import './users.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { ZeroScreen } from '../../components/zeroScreen/ZeroScreen';
import { Table } from '../../components/table/Table';
import { AnimatePage } from '../../components/animatepage';
import { OverlayForm } from '../../components/overlayForm/OverlayForm';

export const Users = () => {
    const userData = {}

    const formField = {
        heading: {title: "User Details", type: "text", line: "heading"},
        name: {title: "name", type: "text", max_limit: 0, line: "single" },
        phone: {title: "phone", type: "text", max_limit: 10, line: "single" },
        designation: {title: "designation", type: "text", max_limit: 0, line: "single" },
        circle: {title: "circle", type: "text", max_limit: 0, line: "single" },
        cmp: {title: "cmp", type: "text", max_limit: 0, line: "single" },
        username: {title: "username", type: "text", max_limit: 0, line: "single" },
        password: {title: "password", type: "password", max_limit: 0, line: "single" },
    };

    const [openForm, setOpenForm] = useState(false);
    return <AnimatePage>
        <div className="users">
            <PageHeader name={"Users"} />
            <FilterBar setOpenForm={setOpenForm} name={"Create new User"} />
            {JSON.stringify(userData) === "{}"? <ZeroScreen setOpenForm={setOpenForm} text={"There is no User yet"} />:<Table data={userData} />}

            {openForm===true? <OverlayForm title={"users"} data={formField} setOpenForm={setOpenForm}  /> : ""}
        </div>
    </AnimatePage>
}