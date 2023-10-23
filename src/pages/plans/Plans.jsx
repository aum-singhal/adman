import React from 'react'
import './plans.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { AnimatePage } from '../../components/animatepage';
import { FilterBar } from '../../components/filterBar/FilterBar';

export const Plans = () => {
    return <AnimatePage>
        <div className="plans">
            <PageHeader name={"Plans"} />

            <FilterBar disableCreate={true} />
        </div>
    </AnimatePage>
}