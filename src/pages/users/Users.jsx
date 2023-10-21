import React from 'react'
import './users.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { ZeroScreen } from '../../components/zeroScreen/ZeroScreen';
import { Table } from '../../components/table/Table';

export const Users = () => {
    const userData = {}

    return <div className="users">
        <PageHeader name={"Users"} />
        <FilterBar name={"Create new User"} />
        {JSON.stringify(userData) === "{}"? <ZeroScreen text={"There is no User yet"} />:<Table data={userData} />}
    </div>
}