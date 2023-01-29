// react
import React from 'react';

// state
import { useDispatch } from 'react-redux';

// actions
import { setMode } from '../../features/config';

// routing
import { Link } from 'react-router-dom';

// utilities
import { getRandNum } from '../../utils/math';

// data
import quotesData from '../../data/quotes.json'

const Splash = () => {
    
    const dispatch = useDispatch();

    const handleModeConfig = (mode) => {
        dispatch(setMode(mode));
    }

    return (
        <div className='splash'>
            <h1 className='splash__title'>Top 100 Quotes of All Time</h1>
            <span className='splash__source'>Source BrainyQuote</span>
            <div className='splash__order'>
                <p className='splash__choose'>Choose the order you want to see the quotes</p>
                <div className='splash__actions'>
                    <Link
                        className='splash__action splash__action--asc' 
                        to={`/quote/0`}
                        onClick={() => {handleModeConfig(1)}}>
                        <i className='splash__icon fa-solid fa-turn-down'></i> Ascending
                    </Link>

                    <Link
                        className='splash__action splash__action--dsc'
                        to={`/quote/${quotesData.length-1}`}
                        onClick={() => {handleModeConfig(2)}}>
                        <i className='splash__icon fa-solid fa-turn-up'></i> Descending
                    </Link>
                    <Link
                        className='splash__action splash__action--random'
                        to={`/quote/${getRandNum(0, 100)}`}
                        onClick={() => {handleModeConfig(3)}}>
                        <i className='splash__icon fa-solid fa-shuffle'></i> Random
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Splash;