import './Skill.css'
import { motion } from 'framer-motion';

const Skill = ({ props }) => {
    return (
        <motion.div className='skill'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
        }}>
            <img src={props.img} alt='' className='skill-img'></img>
            <h4>{props.name}</h4>
        </motion.div>
    )
}

export default Skill
