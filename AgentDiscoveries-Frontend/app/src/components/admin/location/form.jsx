import React, { useState, useEffect } from 'react';

import {apiGet, apiPost, apiPut} from "../../utilities/request-helper";
import Message from "../../message";
import {ControlLabel, Form, FormControl, FormGroup, Button} from "react-bootstrap";
import {FormRow, StyledFormGroup} from "./form.style";
import DegreeDirection from './degree-direction';
import GoogleMap from './google-map';

export default ({ id }) => {
    const [siteName, setSiteName] = useState('');
    const [location, setLocation] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [regionId, setRegionId] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const [isLoaded, setIsLoaded] = useState(false);

    const [error, setError] = useState({});

    useEffect(() => {
        (async () => {
            if (id)
                await loadLocation();
            setIsLoaded(true);
        })();
    }, []);

    const loadLocation = async () => {
        try {
            const location = await apiGet('locations', id);
            setSiteName(location.siteName);
            setLocation(location.location);
            setTimeZone(location.timeZone);
            setRegionId(location.regionId);
            setLongitude(location.longitude);
            setLatitude(location.latitude);
        } catch (error) {
            handleError(error);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();

        const body = {
            siteName,
            location,
            timeZone,
            regionId,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        }

        try {
            if (id)
                await apiPut('locations', body, id);
            else
                await apiPost('locations', body);

            window.location.hash = '#/admin/locations';
        } catch (error) {
            handleError(error);
        }
    };

    const handleError = ({ message }) => setError({ message, type: 'danger' });

    return (
        <React.Fragment>
            <Message message={error} />
            <Form onSubmit={handleSubmit}>
                <h3>{id ? 'Edit' : 'Create'} Location</h3>
                <FormGroup>
                    <ControlLabel>Site Name</ControlLabel>
                    <FormControl
                        placeholder='Enter site name'
                        name='siteName'
                        value={siteName}
                        required
                        onChange={event => setSiteName(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Location</ControlLabel>
                    <FormControl
                        placeholder='Enter location name'
                        name='location'
                        value={location}
                        required
                        onChange={event => setLocation(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Time zone</ControlLabel>
                    <FormControl
                        placeholder='Enter time zone name'
                        name='timeZone'
                        value={timeZone}
                        required
                        onChange={event => setTimeZone(event.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Region</ControlLabel>
                    <FormControl
                        type='number'
                        placeholder='Enter region ID (optional)'
                        name='regionId'
                        value={regionId}
                        required
                        onChange={event => setRegionId(event.target.value)}
                    />
                </FormGroup>
                <FormRow>
                    <StyledFormGroup>
                        <ControlLabel>Latitude</ControlLabel>
                        <FormRow alignCenter>
                            <FormControl
                                type='number'
                                placeholder='00.000'
                                name='latitude'
                                value={latitude}
                                onChange={event => setLatitude(event.target.value)}
                            />
                            <DegreeDirection isNorth />
                        </FormRow>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <ControlLabel>Longitude</ControlLabel>
                        <FormRow alignCenter>
                            <FormControl
                                type='number'
                                placeholder='00.000'
                                name='longitude'
                                value={longitude}
                                onChange={event => setLongitude(event.target.value)}
                            />
                            <DegreeDirection />
                        </FormRow>
                    </StyledFormGroup>
                </FormRow>
                <GoogleMap lat={parseFloat(latitude)} lng={parseFloat(longitude)} title={siteName} isLoaded={isLoaded} />
                <Button type='submit'>Submit</Button>
            </Form>
        </React.Fragment>
    );
}
