import React, { useEffect } from "react";
import { helloAction } from "../actions/HelloAction";
import { useDispatch, useSelector } from 'react-redux';
import { funcAction } from "../actions/NovaAkcija";

export const HelloFunk = () => {
    
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.HelloReducer.greeting);
    const pozdravce = useSelector(state => state.HelloReducer.pozdravce)

    useEffect(()=>{
        dispatch(helloAction());
        dispatch(funcAction());
    }, [dispatch])

    return(
        <div id="hello-func">
            <h2>{greeting}</h2>
            <h1>{pozdravce}</h1>
        </div>
    )
}