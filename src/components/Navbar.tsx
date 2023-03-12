import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
	<div className=' flex justify-evenly gap-10 p-10'>
		<NavLink to={'/'}
			className={' text-slate-500 hover:text-slate-900 hover_underline_animation'}
		>
			Home
		</NavLink>
		<NavLink to={'/calorie'}
			className={'text-slate-500 hover:text-slate-900 hover_underline_animation'}
		>
            Calorie Calculator
		</NavLink>
		<NavLink to={'/recepie'}
			className={'text-slate-500 hover:text-slate-900 hover_underline_animation '}
		>
            Recepies
		</NavLink>
		<NavLink to={'/howTo'}
			className={'text-slate-500 hover:text-slate-900 hover_underline_animation '}
		>
			How To
		</NavLink>
	</div>
);

export default Navbar;
