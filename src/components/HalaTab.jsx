import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './MatchCard.css';
import { MatchCard } from './MatchCard';

export const HalaTab = () => {
    return (
        <>
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 mt-5 d-flex justify-content-center halatab"
            >
                <Tab className='tab-head' eventKey="CRICKET" title="CRICKET">
                    <MatchCard />
                </Tab>
                <Tab className='tab-head' eventKey="FOOTBALL" title="FOOTBALL">
                   
                </Tab>
                <Tab className='tab-head' eventKey="KABADDI" title="KABADDI">
                    
                </Tab>
            </Tabs>
        </>
    )
}