//import { useState } from 'react';
import './Navbar.css'
import { motion } from 'framer-motion';

const Navbar = ({ props }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="navbar"
            >
            <div className="navbar-buttons">
                <button className='navbar-button' onClick={() => props.setDisplay('home')}>Home</button>
                <button className='navbar-button' onClick={() => props.setDisplay('skills')}>Skills</button>
                <button className='navbar-button' onClick={() => props.setDisplay('projects')}>Projects</button>
                <button className='navbar-button' onClick={() => props.setDisplay('about')}>About</button>
            </div>
</motion.div>
    )
}

export default Navbar
