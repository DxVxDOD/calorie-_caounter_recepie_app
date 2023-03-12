import React from 'react';
import {NavLink} from 'react-router-dom';
import LigthDarkSwitch from './LigthDarkSwitch';

const Navbar = () => (
	<div className=' flex justify-evenly gap-10 p-4 bg-zinc-200 dark:bg-zinc-800 shadow-md m-2 rounded-lg shadow-zinc-400 dark:shadow-black dark:shadow-sm'>
		<NavLink to={'/'}
			className={'hover_underline_animation dark:hover_underline_animation-dark'}
		>
			<span className=' text-lime-700 dark:text-lime-600' >Home</span>
		</NavLink>
		<NavLink to={'/calorie'}
			className={'hover_underline_animation dark:hover_underline_animation-dark'}
		>
			<span className=' text-lime-700 dark:text-lime-600' >Calories</span>
		</NavLink>
		<NavLink to={'/recepie'}
			className={'hover_underline_animation dark:hover_underline_animation-dark'}
		>
			<span className=' text-lime-700 dark:text-lime-600' >Recepies</span>
		</NavLink>
		<NavLink to={'/howTo'}
			className={'hover_underline_animation dark:hover_underline_animation-dark'}
		>
			<span className=' text-lime-700 dark:text-lime-600' >How To</span>
		</NavLink>
		<LigthDarkSwitch />
	</div>
);

export default Navbar;
