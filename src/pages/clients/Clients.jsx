import React, { useState } from 'react'
import './clients.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { Table } from '../../components/table/Table';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { ZeroScreen } from '../../components/zeroScreen/ZeroScreen';
import { AnimatePage } from '../../components/animatepage';
import { OverlayForm } from '../../components/overlayForm/OverlayForm';

export const Clients = () => {
    const [clientData, setClientData] = useState([]);
    const tableData = {
        head: ["Name", "ID", "Email Id", "Mobile No.", "Added By"],
        body: [
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" }
        ]
    };

    const formField = {
        id: {title: "id", type: "text", max_limit: 0, line: "text", left: "client details", right_title: "ID - ", right_data: "BREW 221014121014000"},
        name: {title: "name", type: "text", max_limit: 0, line: "single" },
        phone: {title: "phone", type: "text", max_limit: 10, line: "single" },
        email: {title: "email", type: "email", max_limit: 0, line: "single" },
        gst: {title: "GST detail", type: "text", max_limit: 15, line: "single" },
        pan: {title: "PAN no.", type: "text", max_limit: 10, line: "single"},
        address: {title: "address", type: "text", max_limit: 0, line: "multiple"}
    };

    const [openForm, setOpenForm] = useState(false);

    return <AnimatePage>
        <div className="clients">
            <PageHeader name={"Client Details"} />
            <FilterBar setOpenForm={setOpenForm} name={"Create Client"} />
            {JSON.stringify(tableData) === "{}"?<ZeroScreen setOpenForm={setOpenForm} text={"There is no client entry yet"} />:<Table data={tableData} />}

            {openForm===true?<OverlayForm title="client form" data={formField} setOpenForm={setOpenForm} />:""}
        </div>
    </AnimatePage>
}