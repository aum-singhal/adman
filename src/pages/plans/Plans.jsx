import React from 'react'
import './plans.css';
import { PageHeader } from '../../components/pageHeader/PageHeader';
import { AnimatePage } from '../../components/animatepage';

export const Plans = () => {
    return <AnimatePage>
        <div className="plans">
            <PageHeader name={"Plans"} />
        </div>
    </AnimatePage>
}