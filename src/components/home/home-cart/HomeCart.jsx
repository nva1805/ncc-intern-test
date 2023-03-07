import React from 'react'
import './HomeCart.scss'
import homeCart1 from '../../../asset/picture/home-cart1.png'
import homeCart2 from '../../../asset/picture/home-cart2.png'
import homeCart3 from '../../../asset/picture/home-cart3.png'

const HomeCart = () => {
    const HOME_CART = [
        {
            id: 0,
            title: 'Lorem ipsum dolor sit amet',
            img: homeCart1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
        },
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet',
            img: homeCart2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet',
            img: homeCart3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
        },
    ]
    return (
        <div className='home-cart'>
            {HOME_CART && HOME_CART.length > 0 &&
                HOME_CART.map((cart) => (
                    <div className="cart-item" key={cart.id}>
                        <span>{cart.title}</span>
                        <img src={cart.img} alt={cart.title} />
                        <p>{cart.content}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeCart