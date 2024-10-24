import './Home.css'
import Image from '../../assets/img.png'
import DButton from '../dButton/DButton';

const Home = () => {
    return (
        <div className='home'>
            <img src={Image} alt='' className='home-img'></img>
            <br />
            <h1>Hi! I'm Santiago Lozano</h1>
            <br />
            <p>Software Engineer | Full Stack & Mobile Developer</p>
            <br />
            <DButton></DButton>
        </div>
    )
}

export default Home
