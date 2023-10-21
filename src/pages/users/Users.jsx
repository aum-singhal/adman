import React from 'react'
import './users.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { FilterBar } from '../../components/filterBar/FilterBar';

export const Users = () => {
    return <div className="users">
        <PageHeader name={"Users"} />
        <FilterBar name={"Create new User"} />
    </div>
}