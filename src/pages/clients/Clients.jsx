import React from 'react'
import './clients.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { Table } from '../../components/table/Table';

export const Clients = () => {
    const tableData = {
        head: ["Name", "ID", "Email Id", "Mobile No.", "Added By"],
        body: [
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" },
            {"Name": "Good Day", "ID":"BREW 221014121014000", "Email Id":"xyz@gmail.com", "Mobile No.":"98XXXXXX76","Added By":"Aum Singhal" }
        ]
    }

    return <div className="clients">
        <PageHeader name={"Client Details"} />

        <Table data={tableData} />
        
    </div>
}