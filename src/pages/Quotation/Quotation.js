// react
import React from 'react';
import { useEffect } from 'react';

// state
import { useDispatch, useSelector } from 'react-redux';

// actions
import { setQuote } from '../../features/quote';
import { setStart } from '../../features/config';

// routing
import { useParams } from 'react-router-dom';

// data
import quotesData from '../../data/quotes.json';

// components
import Quote from '../../components/Quote/Quote'

const Quotation = () => {

    // url params
    const { id } = useParams();

    // action 
    const dispatch = useDispatch();

    // state
    const config = useSelector((state) => state.config.value);

    useEffect(() => {
        if (!config.start) {
            dispatch(setStart(true));
        }
        dispatch(setQuote(quotesData[Number(id)]));
        
    }, [id, dispatch, config]);

    return (
        <Quote />
    );
};

export default Quotation;