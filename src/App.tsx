import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Recepie from './pages/Recepie';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Total from './pages/Total';

function App() {
	return (
		<div className=' bg-zinc-100 dark:bg-zinc-900 m-0 p-2 box-border min-h-screen overflow-hidden flex flex-col'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/recepie' element={<Recepie />} />
				<Route path='/total' element={<Total />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
