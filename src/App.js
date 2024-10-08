import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DButton from './components/dButton/DButton';

function App() {
	const [display, setDisplay] = useState('home')
	const renderContent = () => {
		switch (display) {
			case 'home':
				return <button>Home</button>;
			case 'skills':
				return <button>Skills</button>;
			case 'projects':
				return <button>Projects</button>;
			case 'about':
				return <button>About</button>;
			default:
				return <button>Home</button>;
		}
	}
	return (
    <>
    	<Navbar display = {display} setDisplay = {setDisplay}></Navbar>
		{renderContent()}
    	<DButton></DButton>
    </>
  	);
}

export default App;
