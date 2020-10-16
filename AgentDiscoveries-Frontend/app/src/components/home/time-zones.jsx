import React, { useState, useEffect } from 'react';

import {apiGet} from '../utilities/request-helper';
import ResultsTable from "../common/results-table";

const COLS = [
    {
        name: 'Time Zone',
        prop: 'timeZone',
    },
    {
        name: 'Time',
        onRender: ({ timeZone }) => new Date().toLocaleString('en-US', {timeZone})
    }
];

const TimeZones = () => {
    const [timeZones, setTimeZones] = useState({});

    useEffect(() => {
        apiGet('locations').then(locations => setTimeZones(locations.reduce((timeZones, location) => {
            timeZones[location.timeZone] = true;
            return timeZones;
        }, {}))
        );
    }, []);

    return (
        <div>
            <ResultsTable cols={COLS} items={Object.keys(timeZones).map(key => ({ timeZone: key }))} />
        </div>
    );
};

export default TimeZones;