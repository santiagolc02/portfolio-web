import './DButton.css'
import { motion } from 'framer-motion'

const DButton = () => {
    return (
        <motion.button className='d-button'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}>
                <span>Download CV</span>
        </motion.button>
    )
}

export default DButton
