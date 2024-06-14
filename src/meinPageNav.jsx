import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Logo from './assets/imgs/Web/icons8-binance-arcade-32.png'

function meinPageNav() {
    return (
        <>
            {/* navbar start */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning fw-bolder" href="#">
                        <img src={Logo} alt="" srcset="" />
                        BIHANCE</a> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* nav list strat */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active ancor" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ancor" aria-current="page" href="#">market</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active ancor" aria-current="page" href="#">earn</a>
                            </li>

                            {/* drop first down */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ancor" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    trade
                                </a>
                                <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                                    <h4 className='text-white m-1'></h4>
                                    <li className='text-white'><hr /></li>
                                    <li><a className="dropdown-item text-white " href="#">spot</a></li>
                                    <li><a className="dropdown-item text-white " href="#">margin</a></li>
                                    <li><a className="dropdown-item text-white " href="#">p2p</a></li>
                                    <li><a className="dropdown-item text-white " href="#">convert and block trade</a></li>
                                    <li className='text-white'><hr /></li>
                                    <h4 className='text-white m-1'>pro</h4>
                                    <li className='text-white'><hr /></li>
                                    <li><a className="dropdown-item text-white " href="#">trading bots</a></li>
                                    <li><a className="dropdown-item text-white " href="#">copy trading</a></li>
                                    <li><a className="dropdown-item text-white " href="#">p2p</a></li>
                                    <li><a className="dropdown-item text-white " href="#">APIs</a></li>
                                </ul>
                            </li>

                            {/* second drop down */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ancor" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    futures
                                </a>
                                <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-white " href="#">usb -m futures</a></li>
                                    <li><a className="dropdown-item text-white " href="#">margin</a></li>
                                    <li><a className="dropdown-item text-white " href="#">mein -m futures</a></li>
                                    <li><a className="dropdown-item text-white " href="#">options</a></li>

                                </ul>
                            </li>

                            {/* third drop down */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ancor" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    square
                                </a>
                                <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-white " href="#">square</a></li>
                                    <li><a className="dropdown-item text-white " href="#">academy (learn & earn)</a></li>
                                    <li><a className="dropdown-item text-white " href="#">blog</a></li>
                                    <li><a className="dropdown-item text-white " href="#">research</a></li>

                                </ul>
                            </li>

                            {/* 4th drop down */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ancor" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    more
                                </a>
                                <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdownMenuLink">
                                    <li className='text-white'><hr /></li>
                                    <li><a className="dropdown-item text-white " href="#">VIP & Institutional </a></li>
                                    <li><a className="dropdown-item text-white " href="#"> Launchpad & Launchpool</a></li>
                                    <li><a className="dropdown-item text-white " href="#">Megadrop</a></li>
                                    <li><a className="dropdown-item text-white " href="#">Mining Pool</a></li>
                                    <li><a className="dropdown-item text-white " href="#">pay</a></li>
                                    <li><a className="dropdown-item text-white " href="#">loans</a></li>
                                    <li className='text-white'><hr /></li>
                                    <li><a className="dropdown-item text-white " href="#">nft</a></li>
                                    <li><a className="dropdown-item text-white " href="#">fun token</a></li>
                                    <li><a className="dropdown-item text-white " href="#">web3 wallet</a></li>
                                    <li><a className="dropdown-item text-white " href="#">bnb chain</a></li>
                                    <li><a className="dropdown-item text-white " href="#">Charity</a></li>
                                </ul>
                            </li>
                        </ul>

                        {/* right side nav elem */}
                        <ul className='navbar-nav text-white ms-auto'>
                            <li><a href="#">
                                <button className='btn btn-warning'>sign up</button>
                            </a></li>

                            <li><a href="#">
                                <button className='btn text-white'>sign up</button>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}
        </>
    )
}

export default meinPageNav