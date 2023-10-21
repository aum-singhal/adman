import React from 'react'
import './clients.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { Table } from '../../components/table/Table';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { ZeroScreen } from '../../components/zeroScreen/ZeroScreen';
import { AnimatePage } from '../../components/animatepage';

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
    // const tableData = {}

    return <AnimatePage>
        <div className="clients">
            <PageHeader name={"Client Details"} />
            <FilterBar name={"Create Client"} />
            {JSON.stringify(tableData) === "{}"?<ZeroScreen text={"There is no client entry yet"} />:<Table data={tableData} />}
        </div>
    </AnimatePage>
}