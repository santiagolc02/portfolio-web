import './App.css';
import Navbar from './components/navbar/Navbar';
import { motion } from 'framer-motion';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}>
        <span>Download CV</span>
      </motion.button>
    </>
  );
}

export default App;
