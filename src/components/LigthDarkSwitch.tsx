import React, {useState, useEffect} from 'react';
import sun from '../assets/sun-svgrepo-com (1).svg';
import moon from '../assets/moon-phases-moon-svgrepo-com.svg';

const LigthDarkSwitch = () => {
	const [theme, setTheme] = useState('dark');
	const [logo, setLogo] = useState(moon);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			setLogo(moon);
		} else {
			document.documentElement.classList.remove('dark');
			setLogo(sun);
		}
	}, [theme]);

	const handleSwitch = () => {
		setTheme(theme === 'dark' ? 'ligth' : 'dark');
	};

	return (
		<button onClick={handleSwitch} ><img src={logo}></img></button>
	);
};

export default LigthDarkSwitch;
