import React, { createContext, useState } from 'react';

const WeatherContext = createContext({
    weather: null,
    city: null,
    units: null,
    setWeather: health => {},
    setCity: info => {},
    setUnits: info => {},
});

export function WeatherProvider(props) {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState(null); 
    const [units, setUnits] = useState('C'); // 'C' | 'F' 

    const context = {
        weather: weather,
        city: city,
        units: units,
        setWeather: info => setWeather(info),
        setCity: city => setCity(city),
        setUnits: units => setUnits(units),
    };

    return (
        <WeatherContext.Provider value={context}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
