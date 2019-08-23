import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { POST_LABELLIST_REQUEST } from '../reducers/label';

const InputLabelForm = () => {
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const onChangeLat = useCallback((e) => {
        setLat(e.target.value)
    }, [])

    const onChangeLng = useCallback((e) => {
        setLng(e.target.value)
    }, [])

    const onChangeName = useCallback((e) => {
        setName(e.target.value)
    }, [])
    const onSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch({
            type: POST_LABELLIST_REQUEST,
            data: {
                lat,
                lng,
                name
            }
        })
    }, [lat, lng, name])
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="post-lat">lat</label>
                <input value={lat} onChange={onChangeLat}></input>
                <br />

                <label htmlFor="post-lng">lng</label>
                <input value={lng} onChange={onChangeLng}></input>
                <br />

                <label htmlFor="post-name">name</label>
                <input value={name} onChange={onChangeName}></input>
                <br />
                <button type="submit">제출</button>
            </form>
        </>
    )
}

export default InputLabelForm