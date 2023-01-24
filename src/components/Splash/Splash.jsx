import React from 'react';

const Splash = ({handleDisplayUpdate, handleModeChange}) => {

    const handleStateChange = (event, mode) => {
        event.preventDefault();

        handleModeChange(mode);
        handleDisplayUpdate();
    }

    return (
        <div className='splash'>
            <h1 className='splash__title'>Top 100 Quotes of All Time</h1>
            <span className='splash__source'>Source BrainyQuote</span>
            <div className='splash__order'>
                <p className='splash__choose'>Choose the order you want to see the quotes</p>
                <div className='splash__actions'>
                    <a className='splash__action splash__action--asc' href=" " onClick={(e) => {handleStateChange(e, 1)}}>
                        <i className='splash__icon fa-solid fa-turn-down'></i> Ascending
                    </a>
                    <a className='splash__action splash__action--dsc' href=" " onClick={(e) => {handleStateChange(e, 2)}}>
                        <i className='splash__icon fa-solid fa-turn-up'></i> Descending
                    </a>
                    <a className='splash__action splash__action--random' href=" " onClick={(e) => {handleStateChange(e, 3)}}>
                        <i className='splash__icon fa-solid fa-shuffle'></i> Random
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Splash;