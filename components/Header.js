import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#007BFF', color: 'white' }}>
            <div className='logo'>
                <h1>BlueStep</h1>
            </div>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li style={{ margin: '0 15px' }}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                    <li style={{ margin: '0 15px' }}><Link to='/features' style={{ textDecoration: 'none', color: 'white' }}>Features</Link></li>
                    <li style={{ margin: '0 15px' }}><Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
                    <li style={{ margin: '0 15px' }}><Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
                </ul>
            </nav>
            <button style={{ padding: '10px 20px', backgroundColor: 'white', color: '#007BFF', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Demo
            </button>
        </header>
    );
};

export default Header;
