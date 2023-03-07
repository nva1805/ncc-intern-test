import React from 'react'
import { NavLink } from 'react-router-dom'
import './LeftBar.scss'

const LeftBar = () => {
    const NAV_LIST = [
        {
            id: 0,
            title: 'Home',
            path: '/',
        },
        {
            id: 1,
            title: 'Services',
            path: '/services',
        },
        {
            id: 2,
            title: 'News',
            path: '/news',
        },
        {
            id: 3,
            title: 'Blog',
            path: '/blog',
        },
        {
            id: 4,
            title: 'Contact',
            path: '/contact',
        },
    ]
    const handleShowMenu = () => {

    }
    return (
        <div className='leftBar'>
            <button onClick={() => handleShowMenu}>Menu</button>
            {
                NAV_LIST &&
                NAV_LIST.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.id}
                    >
                        <div className="leftBar__list-item">
                            {item.title}
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default LeftBar