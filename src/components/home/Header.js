import React from 'react'
import Logo from '../../images/got-log.png'

const Header = () => {
    return (

        <header >  
       
        <img className='center' src={Logo} alt='logo_img'/>
        <div  style={{ color: "#e25822"}}> <h1 className="houses">House Names</h1></div>

            
        </header>
    )
}

export default Header
