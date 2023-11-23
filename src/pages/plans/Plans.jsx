import React, { useState } from 'react'
import './plans.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { AnimatePage } from '../../components/animatepage';
import { FilterBar } from '../../components/filterBar/FilterBar';
import { ZeroScreen } from '../../components/zeroScreen/ZeroScreen';
import { Table } from '../../components/table/Table';

export const Plans = () => {
    const planData = {}
    const [openForm, setOpenForm] = useState()
    return <AnimatePage>
        <div className="plans">
            <PageHeader name={"Plans"} />

            <FilterBar disableCreate={true} />


            {JSON.stringify(planData)==="{}"?<ZeroScreen setOpenForm={setOpenForm} disableCreate={true} text={"There are no Plans yet"}/>:<Table data={planData}/>}
        </div>
    </AnimatePage>
}