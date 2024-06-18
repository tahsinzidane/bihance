import React, { useState } from 'react';
import Plus from './assets/imgs/Web/add-circle-line.svg';

function OptionCard({heading, txt}) {
    const [isTxtVisible, setIsTxtVisible] = useState(false);

    const toggleTxtVisibility = () => {
        setIsTxtVisible(prevState => !prevState);
    }

    return (
        <>
            <div className=''>
                <h3 className='m-1 mt-2'>{heading}</h3>

                <p className='ms-5 pgraph'>
                    {isTxtVisible && txt}
                </p>

                <span className='float-end' onClick={toggleTxtVisibility}>
                    <img src={Plus} alt="" style={{ height: '30px', cursor: 'pointer' }} />
                </span>
            </div>
        </>
    );
}

export default OptionCard;
