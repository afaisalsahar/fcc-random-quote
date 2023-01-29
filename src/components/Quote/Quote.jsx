// react
import React from 'react';

// routing
import { Link } from 'react-router-dom';

// state
import { useSelector } from 'react-redux';

// data
import quotesData from '../../data/quotes.json';

// utiliites
import { getRandNum } from '../../utils/math';

const Quote = () => {
    
    // state
    const quote = useSelector((state) => state.quote.value);
    const config = useSelector((state) => state.config.value);

    // tweet
    const quoteTweet = 
            'https://twitter.com/intent/tweet?source=webclient&text=' + 
            encodeURIComponent(quote.quote + ' - ') +
            encodeURIComponent(quote.author + ' #Quote');

    const handleNextQuote = () => {
        const quoteIndex = quotesData.indexOf(quote);

        return config.mode === 1 ? quoteIndex + 1 : config.mode === 2 ? quoteIndex - 1 : getRandNum(0, quotesData.length)
    }

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
                <Link
                    className="quote__action"
                    to={`/quote/${handleNextQuote()+1}`}>
                    <i className="quote__icon fa-solid fa-paper-plane"></i>
                    New Quote
                </Link>
                <a className="quote__action" href={quoteTweet} rel='noreferrer' target="_blank">
                    <i className="quote__icon fa-brands fa-twitter"></i>
                    Tweet
                </a>
            </div>
        </div>
    );
};

export default Quote;