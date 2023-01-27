// react
import React from 'react';

// state
import { useSelector } from 'react-redux';

const Quote = ({handleNewQuote}) => {
    
    // state
    const quote = useSelector((state) => state.quote.value);

    // tweet
    const quoteTweet = 
            'https://twitter.com/intent/tweet?source=webclient&text=' + 
            encodeURIComponent(quote.quote + ' - ') +
            encodeURIComponent(quote.author + ' #Quote');

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
                    handleNewQuote(quote);
                }}>
                    <i className="quote__icon fa-solid fa-paper-plane"></i>
                    New Quote
                </a>
                <a className="quote__action" href={quoteTweet} rel='noreferrer' target="_blank">
                    <i className="quote__icon fa-brands fa-twitter"></i>
                    Tweet
                </a>
            </div>
        </div>
    );
};

export default Quote;