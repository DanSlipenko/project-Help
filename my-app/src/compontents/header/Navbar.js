import React from 'react'

function Navbar(){
    return(
            <div className='Navbar'>
                <p className='Name'>Name</p>
                <ul>
                    <li>Work</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
                <button>DONATE</button>
            </div>
    )
}

export default Navbar;