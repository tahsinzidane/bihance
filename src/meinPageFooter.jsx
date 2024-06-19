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
                            <button className='btn btn-warning p-3 text-white mb-5'>sign up now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-flued bg-dark text-white">
                <div className="container ">
                    <div className="row ">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 ">
                            <label className='' htmlFor="fc-list"><h5> Community </h5></label>
                            <ul className=' fc-list'>
                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Dc} alt="" style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3' />
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Fb} alt="" style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3' />
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Teligram} alt="" style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3' />
                                </li>

                                <li className='d-inline-block m-1'><a href=""></a>
                                    <img src={Tiktok} alt="" style={{
                                        height: '20px',
                                        backgroundColor: 'white',
                                        cursor: 'pointer'
                                    }} className='rounded-3' />
                                </li>
                            </ul>
                        </div>

                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 '>
                            <label htmlFor="about">
                                <h5> about us </h5>
                            </label>
                            <ul className='list-unstyled about'>
                                <li><a href="#">about</a></li>
                                <li><a href="#">careers </a></li>
                                <li><a href="#">Announcements</a></li>
                                <li><a href="#">news</a></li>
                                <li><a href="#">press</a></li>
                                <li><a href="#">donate for palestine</a></li>
                                <li><a href="#">legal</a></li>
                                <li><a href="#">terms</a></li>
                                <li><a href="#">privacy</a></li>
                                <li><a href="#">bulding trust</a></li>
                                <li><a href="#">blog</a></li>
                                <li><a href="#">community</a></li>
                                <li><a href="#">sitemap</a></li>
                                <li><a href="#">risk warning</a></li>
                                <li><a href="#">notices</a></li>
                                <li><a href="#">downloads</a></li>
                                <li><a href="#">desktop application</a></li>
                            </ul>
                        </div>

                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 '>
                            <label htmlFor="product">
                                <h5> product </h5>
                            </label>
                            <ul className='list-unstyled product'>
                                <li><a href="#">Exchange</a></li>
                                <li><a href="#">Buy Crypto </a></li>
                                <li><a href="#">Leveraged Tokens</a></li>
                                <li><a href="#">TradingView</a></li>
                                <li><a href="#">Pay</a></li>
                                <li><a href="#">donate for palestine</a></li>
                                <li><a href="#">Academy</a></li>
                                <li><a href="#">Live</a></li>
                                <li><a href="#">Tax</a></li>
                                <li><a href="#">Gift Card</a></li>
                                <li><a href="#">Launchpool</a></li>
                                <li><a href="#">Auto-Invest</a></li>
                                <li><a href="#">ETH Staking</a></li>
                                <li><a href="#">NFT</a></li>
                                <li><a href="#">BNB</a></li>
                                <li><a href="#">BABT</a></li>
                                <li><a href="#">Research</a></li>
                                <li><a href="#">Charity</a></li>
                            </ul>
                        </div>

                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 '>
                            <label htmlFor="Business">
                                <h5> Business </h5>
                            </label>
                            <ul className='list-unstyled Business'>
                                <li><a href="#">P2P Merchant Application</a></li>
                                <li><a href="#">P2P pro Merchant Application </a></li>
                                <li><a href="#">Listing Application</a></li>
                                <li><a href="#">Institutional & VIP Services</a></li>
                                <li><a href="#">Labs</a></li>
                                <li className='fw-bold'>Learn</li>
                                <li><a href="#">Learn & Earn</a></li>
                                <li><a href="#">Browse Crypto Prices</a></li>
                                <li><a href="#">Bitcoin Price</a></li>
                                <li><a href="#">Ethereum Price</a></li>
                                <li><a href="#">Browse Crypto Price Predictions</a></li>
                                <li><a href="#">Bitcoin Price Prediction</a></li>
                                <li><a href="#">Ethereum Price Prediction</a></li>
                                <li><a href="#">Buy Bitcoin</a></li>
                                <li><a href="#">Buy Ripple</a></li>
                                <li><a href="#">Buy Dogecoin</a></li>
                                <li><a href="#">Buy Ethereum</a></li>
                                <li><a href="#">Buy Ethereum</a></li>
                            </ul>
                        </div>

                        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xm-2 mt-2 mt-5 '>
                            <label htmlFor="about">
                                <h5> about us </h5>
                            </label>
                            <ul className='list-unstyled about'>
                                <li><a href="#">about</a></li>
                                <li><a href="#">careers </a></li>
                                <li><a href="#">Announcements</a></li>
                                <li><a href="#">news</a></li>
                                <li><a href="#">press</a></li>
                                <li> <a href="https://www.wesupportpalestine.net/">donate for palestine</a></li>
                                <li><a href="#">legal</a></li>
                                <li><a href="#">terms</a></li>
                                <li><a href="#">privacy</a></li>
                                <li><a href="#">bulding trust</a></li>
                                <li><a href="#">blog</a></li>
                                <li><a href="#">community</a></li>
                                <li><a href="#">sitemap</a></li>
                                <li><a href="#">risk warning</a></li>
                                <li><a href="#">notices</a></li>
                                <li><a href="#">downloads</a></li>
                                <li><a href="#">desktop application</a></li>
                            </ul>
                        </div>




                    </div>

                    <div className="row">
                        <div className="col-lg-6 mt-5 border-top">
                           <span className='float-end'> bihance &copy; {new Date().getFullYear()} </span>
                        </div>
                        <div className="col-lg-6 mt-5 border-top">
                            Cookie Preferences
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default meinPageFooter