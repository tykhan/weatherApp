import React, { useEffect } from 'react';
import axios from 'axios';

import { ShortInfoPanel } from './ShortInfoPanel/ShortInfoPanel';
import { DetailedPanel } from './DetailedPanel/DetailedPanel';
import './app.scss'

const API_KEY = 'fe18025f94d44634b09150538212609';

const App = () => {
    useEffect(() => {
        // axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Lviv`)
        //     .then(res => console.log(res, 'res'))
        //     .catch(e => console.log(e));
    }, [])
    return (
        <main className="main">
            <div className="app">
                <ShortInfoPanel />
                <DetailedPanel />
            </div>
        </main>
    )
}

export default App;
