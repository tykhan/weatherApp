import React from 'react';

import { LocationSearchInput } from '../SearchInput/SearchInput';
import './ShortInfoPanel.scss';

export const ShortInfoPanel = () => {
    return (
        <section className="shortinfo-panel">
            <div className="shortinfo-panel-top">
                <LocationSearchInput />
                <button className="home-button"/>
            </div>
        </section>
    )
}
