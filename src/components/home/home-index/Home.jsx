import React from 'react'
import HomeBanner from '../home-banner/HomeBanner'
import HomeCart from '../home-cart/HomeCart'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-banner">
                <HomeBanner />
            </div>
            <div className="home-cart">
                <HomeCart />
            </div>
        </div>
    )
}

export default Home