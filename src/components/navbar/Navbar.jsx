import { useState } from 'react';
import './Navbar.css'
import { motion } from 'framer-motion';

const Navbar = ({ display, setDisplay }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="navbar"
            >
            <div className="navbar-buttons">
                <button className='navbar-button' onClick={() => setDisplay('home')}>Home</button>
                <button className='navbar-button' onClick={() => setDisplay('skills')}>Skills</button>
                <button className='navbar-button' onClick={() => setDisplay('projects')}>Projects</button>
                <button className='navbar-button' onClick={() => setDisplay('about')}>About</button>
            </div>
</motion.div>
    )
}

export default Navbar
