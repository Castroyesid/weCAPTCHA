import React from 'react'
import './Header.css'
import Logo from './logo.png'

class Header extends React.Component{
    render() {
        return (
            <div className='header2'>
                <img src={Logo} className='fitThis'/>
            </div>
        );
    }
}

export default Header;