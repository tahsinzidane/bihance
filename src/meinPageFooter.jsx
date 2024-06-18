import React from 'react'
import Dc from './assets/imgs/Web/discord-fill.svg'
import Fb from './assets/imgs/Web/facebook-circle-fill.svg'
import Teligram from './assets/imgs/Web/telegram-fill.svg'
import Tiktok from './assets/imgs/Web/tiktok-fill.svg'



function meinPageFooter() {
    return (
        <>
            <div className="container-flued upperfooter">
                <div className="container ">
                    <div className="row ">
                        <div className="col mt-5 text-center">
                            <h1>Start earning today</h1>
                            <button className='btn btn-warning p-3 text-white'>sign up now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-flued bg-dark text-white">
                <div className="container ">
                    <div className="row ">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 border">
                            <label className='' htmlFor="fc-list">Community</label>
                            <ul className=' fc-list'>
                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Dc} alt=""style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3'/>
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Fb} alt=""style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3'/>
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Teligram} alt=""style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3'/>
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Tiktok} alt=""style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3'/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default meinPageFooter