import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [display, setDisplay] = useState('home');

    const renderContent = () => {
        switch (display) {
            case 'home':
                return (
                    <motion.div
                        key="home" // Unique key for the home component
                        className='home-div'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 }, y: -30 }} // Add duration to exit
                        transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <Home />
                    </motion.div>
                );

            case 'skills':
                return (
                    <motion.div
                        key="skills" // Unique key for skills
						className='skills-div'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 }, y: -30 }} // Add duration to exit
                        transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <Skills />
                    </motion.div>
                );

            case 'projects':
                return (
                    <motion.div
						className='projects-div'
                        key="projects" // Unique key for projects
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 }, y: -30 }} // Add duration to exit
                        transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <Projects />
                    </motion.div>
                );

            case 'about':
                return (
                    <motion.div
						className='about-div'
                        key="about" // Unique key for about
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 }, y: -30 }} // Add duration to exit
                        transition={{ duration: 0.2, ease: 'easeOut' }}>
                        <About />
                    </motion.div>
                );

            default:
                return null; // Return null if no case matches
        }
    };

    return (
        <>
            <Navbar props={{ setDisplay }} />
            <AnimatePresence mode='wait'>
                {renderContent()}
            </AnimatePresence>
        </>
    );
}

export default App;
