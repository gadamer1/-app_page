import React, { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import Label from '../components/Label';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_LABELLIST_REQUEST } from '../reducers/label';
import InputLabelForm from '../components/InputLabelForm';

const Home = () => {
    const { labelList } = useSelector(state => state.label);
    const dispatch = useDispatch();
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    const onLoadLabels = useCallback(() => {
        dispatch({
            type: LOAD_LABELLIST_REQUEST,
        })
    }, [])
    return (
        <>
            <div>cappit 5주차</div>
            <div className="tap">
                {labelList.map(v => {
                    return (
                        <Label key={v.name} name={v.name} />
                    )
                })}
                <button onClick={onLoadLabels}>getLabels</button>
            </div>
            <InputLabelForm />
            <div style={{ height: '100vh', width: '80%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBzSezxBpG3ITijfS-4QxHPDkcxF6C-STA" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    {labelList && labelList.map(v => {
                        return (<div lat={v.lat} lng={v.lng}>{v.name}</div>)
                    })}

                </GoogleMapReact>
            </div>
        </>
    );
}

export default Home;