import React from 'react';
import { HalaTab } from './HalaTab';
import './MatchCenter.css';
import { NavBar } from './NavBar';

export const MatchCenter = () => {
    return (
        <>
          <NavBar/>
          <div className='main-container'>
            <div className='container'>
              <div className='hero-section py-3'>
                <h3 className='match-head'>Match Center</h3>
                <div className='d-flex justify-content-center position-relative'>
                  <p className="text-para">List of all upcoming matches. Click on match card to enter lobby.</p>
                </div>
                <div className='got-league-code position-absolute'>
                  <button type='button' className='btn btn-league-code'>
                    Got League Code?
                  </button>
                </div>
              </div>
            </div>
            <HalaTab />
          </div>
        </>
    )
}