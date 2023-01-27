import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <span className="footer__icon footer__icon--code">
                <svg width="14px" height="16px" viewBox="0 0 14 16" version="1.1" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.5,3 L8,4.5 L11.5,8 L8,11.5 L9.5,13 L14,8 L9.5,3 L9.5,3 Z M4.5,3 L0,8 L4.5,13 L6,11.5 L2.5,8 L6,4.5 L4.5,3 L4.5,3 Z"></path>
                </svg>
            </span> with
            <span className="footer__icon footer__icon--heart">
                <svg width="12px" height="16px" viewBox="0 0 12 16" version="1.1">
                    <path fillRule="evenodd" d="M11.2,3 C10.68,2.37 9.95,2.05 9,2 C8.03,2 7.31,2.42 6.8,3 C6.29,3.58 6.02,3.92 6,4 C5.98,3.92 5.72,3.58 5.2,3 C4.68,2.42 4.03,2 3,2 C2.05,2.05 1.31,2.38 0.8,3 C0.28,3.61 0.02,4.28 0,5 C0,5.52 0.09,6.52 0.67,7.67 C1.25,8.82 3.01,10.61 6,13 C8.98,10.61 10.77,8.83 11.34,7.67 C11.91,6.51 12,5.5 12,5 C11.98,4.28 11.72,3.61 11.2,2.98 L11.2,3 Z"></path>
                </svg>
            </span> by <a className='footer__action' href="https://github.com/afaisalsahar" rel='noreferrer' target="_blank"> Ahmad</a>
        </div>
    );
};

export default Footer;