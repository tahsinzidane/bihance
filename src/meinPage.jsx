import React, { useState } from 'react';
import Card from './mpCard.jsx';
import OptionCard from './optionCard.jsx'
import Apple from './assets/imgs/Web/apple-fill.svg';
import Google from './assets/imgs/Web/google-fill.svg';
import AppQr from './assets/imgs/Web/qr-code-line.svg';
import Mobile from './assets/imgs/mobile.svg';
import Ubunto from './assets/imgs/Web/ubuntu-fill.svg';
import Windows from './assets/imgs/Web/windows-fill.svg';

function MainPage() {
    const initialCardData = [
        {
            name: 'BTC',
            subName: 'bitcoin',
            amount: '$67,020.01',
            minused: '-3.65%'
        },

        {
            name: 'BTC',
            subName: 'bitcoin',
            amount: '$67,020.01',
            minused: '-3.65%'
        },

        {
            name: 'ETH',
            subName: 'ethereum',
            amount: '$67,020.01',
            minused: '-3.65%'
        },

        {
            name: 'BNB',
            subName: 'BNB',
            amount: '$67,020.01',
            minused: '-3.65%'
        },

        {
            name: 'XRP',
            subName: 'ripple',
            amount: '$67,020.01',
            minused: '-3.65%'
        }

    ];

    const newListingCardData = [
        {
            name: 'DOGE',
            subName: 'dogecoin',
            amount: '$0.25',
            minused: '+5.00%'
        },

        {
            name: 'ADA',
            subName: 'cardano',
            amount: '$1.25',
            minused: '+2.50%'
        },

        {
            name: 'SOL',
            subName: 'solana',
            amount: '$32.00'
            , minused: '-1.00%'
        },

        {
            name: 'DOT',
            subName: 'polkadot',
            amount: '$25.00'
            , minused: '+3.25%'
        }

    ];

    const [cardData, setCardData] = useState(initialCardData);

    const handlePopularData = () => {
        setCardData(initialCardData);
    };

    const handleNewListingData = () => {
        setCardData(newListingCardData);
    };

    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="container">
                    <div className="row">
                        {/* left sided content */}
                        <div className="col-xxl-6 col-md-12 mt-5">
                            <h1 className='ms-5 py-5 heading'>
                                <span className='text-warning'>201,575,188 </span> <br />
                                USERS <br />
                                TRUST  US
                            </h1>
                            {/* input area */}
                            <div className="container m-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter your name or email" />
                                            <button className="btn btn-warning" type="button">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* input area */}

                            {/* social zone */}
                            <div className="mt-5 c-box ">
                                <div className='d-flex'>
                                    <p className='ms-3 mt-5'>Or Connect With</p>
                                    <p className='ms-5 mt-5'>download app</p>
                                </div>
                                <ul className='mt-5'>
                                    <li>
                                        <img src={Google} style={{
                                            height: '40px',
                                            backgroundColor: 'white',
                                            padding: '8px',
                                            borderRadius: '10px'
                                        }} alt="" />
                                    </li>
                                    <li>
                                        <img src={Apple} style={{
                                            height: '40px',
                                            backgroundColor: 'white',
                                            padding: '8px',
                                            borderRadius: '10px'
                                        }} alt="" />
                                    </li>
                                    <li className='ms-5'>
                                        <img src={AppQr} style={{
                                            height: '40px',
                                            backgroundColor: 'white',
                                            padding: '8px',
                                            borderRadius: '10px'
                                        }} alt="" />
                                    </li>
                                </ul>
                            </div>
                            {/* social zone */}
                        </div>

                        {/* right sided content */}
                        <div className="col-xxl-6 col-md-12 mt-5">
                            <div className="card-area">
                                <span className='m-2 option' onClick={handlePopularData}>popular</span>
                                <span className='ms-5 m-2 option' onClick={handleNewListingData}>new listing</span>
                                {cardData.map((card, index) => (
                                    <Card
                                        key={index}
                                        name={card.name}
                                        subName={card.subName}
                                        amount={card.amount}
                                        minused={card.minused}
                                    />
                                ))}
                            </div>

                            <div className='card-area mt-5 mb-5'>
                                <ul>
                                    <li className='m-2'>
                                        TON Surpasses Ethereum In Daily Active Addresses, Reports Delphi Digital
                                    </li>
                                    <li className='m-2'>
                                        Cardano Set to Become Fully Decentralized With Advanced Governance System
                                    </li>
                                    <li className='m-2'>
                                        API3's Oracle Stack Now Available on inEVM, Facilitating Access to Decentralized Data Sources
                                    </li>
                                    <li className='m-2'>
                                        WisdomTree Reports Positive Inflows and Asset Management Growth in May 2024
                                    </li>
                                    <li><a href="#">
                                        view all news &rarr;
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second section start */}
            <div className="container-fluid bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className='col-xxl-6 col-sm-12 mt-5 text-center mobile-div'>
                            <img className='img-fluid border rounded-3' src={Mobile} style={{ height: '700px' }} alt="" />
                            <p className='mt-3'>mobile</p>
                        </div>

                        <div className='col-xxl-6 col-sm-12 mt-5 text-center'> {/* make text center class here */}
                            <h1>
                                Trade on the go. Anywhere, <br /> anytime.
                            </h1>

                            {/* qr scanner img */}
                            <div className='mt-5'>
                                <img className='' src={AppQr} style={{
                                    height: '150px',
                                    width: '150px'
                                }} alt="" />
                                <div className='mt-5'>
                                    <p>Scan to Download the App</p>
                                    <h3>iOS and Android</h3>
                                </div>
                            </div>
                            {/* qr scanner img */}

                            <div className=' mt-5 download-link'>
                                <ul className=''>
                                    <li className='d-inline-block bg-white m-1 rounded-4 fw-bold '>
                                        <img src={Windows} style={{
                                            height: '60px'
                                        }} alt="" />
                                    </li>
                                    for windows
                                    <li className='d-inline-block bg-white m-1 rounded-4 fw-bold '>
                                        <img src={Apple} style={{
                                            height: '60px'
                                        }} alt="" />
                                    </li>
                                    for mac
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* second section start */}

            <div className='container-flued bg-dark text-white'>
                <div className="container">
                    <div className="row">
                        {/* heading here */}
                        <div className="col mt-5">
                            <h1 className='text-center'>Frequently Asked Questions</h1>
                        </div>
                        {/* option card */}
                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='1 What is a cryptocurrency exchange?'
                            txt='Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.'
                            />
                        </div>

                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='2 What products does Binance provide?'
                                txt='Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.'
                            />
                        </div>

                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='3 How to buy Bitcoin and other cryptocurrencies on Binance'
                                txt='There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.'
                            />
                        </div>

                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='4 How to track cryptocurrency prices'
                                txt='The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time.'
                            />
                        </div>

                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='5 How to trade cryptocurrencies on Binance'
                                txt='You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.'
                            />
                        </div>

                        <div className="col-xl-12 col-sm-12 rounded-3 m-1 optioncard">
                            <OptionCard heading='6 How to earn from crypto on Binance'
                                txt='Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
