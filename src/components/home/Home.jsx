import './Home.css'
import Image from '../../assets/img.png'
import DButton from '../dButton/DButton';

const Home = () => {
    return (
        <div className='home'>
            <img src={Image} alt=''></img>
            <br />
            <h1>Santiago Lozano</h1>
            <br />
            <p>Software Engineer | Full Stack & iOS Developer</p>
            <br />
            <DButton></DButton>
        </div>
    )
}

export default Home
