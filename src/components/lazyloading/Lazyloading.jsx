import React from 'react';
import './lazyloading.scss'
function Lazyloading({heading}) {
    return (
        <div className='loading'>
           <div className='box'>
                <div className='spin'></div>
                <span>{heading}</span>
            </div>
        </div>
    );
}

export default Lazyloading;