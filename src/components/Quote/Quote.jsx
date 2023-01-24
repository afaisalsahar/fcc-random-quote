import React from 'react';

const Quote = ({quote, handleNewQuote}) => {
    
    return (
        <div className="quote">
            <blockquote className="quote__text">
                {quote.quote}
            </blockquote>
            <cite className="quote__author">
                {quote.author}
            </cite>
            <div className="quote__actions">
                <span className="quote__action">
                    <i className="quote__icon fa-solid fa-star"></i>
                    <span className="quote__rank">
                        {quote.rank}
                    </span>
                </span>
                <a className="quote__action" href=" " onClick={(e) => {
                    e.preventDefault();
                    handleNewQuote();
                }}>
                    <i className="quote__icon fa-solid fa-paper-plane"></i>
                    New Quote
                </a>
                <a className="quote__action" href=" " target="_blank">
                    <i className="quote__icon fa-brands fa-twitter"></i>
                    Tweet
                </a>
            </div>
        </div>
    );
};

export default Quote;