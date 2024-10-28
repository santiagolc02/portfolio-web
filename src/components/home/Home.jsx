import './Home.css'
import DButton from '../dButton/DButton';

const Home = () => {
    return (
        <div className='home'>
            <img src='/assets/img.png' alt='' className='home-img'></img>
            <br />
            <h1>Hi! I'm Santiago Lozano</h1>
            <br />
            <p>Software Engineer | Full Stack & Mobile Developer</p>
            <br />
            <br />
            <DButton></DButton>
        </div>
    )
}

export default Home
