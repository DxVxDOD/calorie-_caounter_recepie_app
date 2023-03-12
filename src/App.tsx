import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Recepie from './pages/Recepie';
import HowTo from './pages/HowTo';
import Calorie from './pages/Calorie';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className=' bg-slate-300 m-0 box-border h-screen overflow-hidden flex flex-col'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/calorie' element={<Calorie />} />
				<Route path='/howTo' element={<HowTo />} />
				<Route path='/recepie' element={<Recepie />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
