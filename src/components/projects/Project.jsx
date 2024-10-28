import './Project.css'
import { motion } from 'framer-motion';

const Project = ({ props }) => {
    const { title, img } = props; // Destructure properties from props

    return (
        <motion.div className='project'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ y: -10 }}>
            <img src={img} alt={title} className='project-img'></img>
            <h5>{title}</h5>
            
        </motion.div>
    )
}

export default Project
