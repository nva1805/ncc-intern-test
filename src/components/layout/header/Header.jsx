import React from 'react'
import Logo from '../../../asset/picture/logoNCC.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt="NCC LOGO" />
    </div>
  )
}

export default Header