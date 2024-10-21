import './DButton.css'
import { motion } from 'framer-motion';

const DButton = () => {
    return (
        <motion.button 
            className='d-button'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
            
            <p className='button-text'>Download CV</p>
        </motion.button>
    )
}

export default DButton
