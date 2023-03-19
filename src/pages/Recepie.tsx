/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useEffect, useState} from 'react';
import {type RecepieData} from '../types/myTypes';
import axios from 'axios';
import RecepieCard from '../components/RecepieCard';

const Recepie = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [recepies, setRecepie] = useState([{
		title: '',
		ingredients: '',
		servings: '',
		instructions: '',
	}]);

	const searchRecepie = (recepieQuery: string) => {
		const options = {
			method: 'GET',
			url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
			params: {query: `${recepieQuery}`},
			headers: {
				'X-RapidAPI-Key': '2360fdfd74msha2947f11b7f085ap1bec68jsn9cc4e39d2275',
				'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
			  },
		};
		axios
			.request(options)
			.then(({data}: {data: RecepieData[]}) => {
				setRecepie(data);
			})
			.catch((error: any) => {
				console.error(error);
			});
	};

	useEffect(() => {
		searchRecepie('Bolognese');
	}, [searchTerm]);

	return (
		<div
			className='flex flex-col h-full gap-2 align-middle items-center'>
			<h1
				className=' text-lime-700 dark:text-lime-600 text-5xl text-center mt-28'>
        Recepie Finder
			</h1>
			<h2
				className=' text-lime-900 dark:text-lime-700 text-xl text-center'>
      Here you can find all of your favourite recepies
			</h2>
			<div className=' border-solid border-2 rounded-md w-1/2 border-lime-700 dark:border-lime-900 mt-10' >
				<input
					onChange={e => {
						setSearchTerm(e.target.value);
					}}
					value={searchTerm}
					placeholder='Bolognese'
					type='text'
					className=' border-none outline-none rounded-md w-full placeholder-zinc-900 dark:placeholder-zinc-100
          placeholder:opacity-60 pl-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200'/>
				<button
					onClick={() => {
						searchRecepie(searchTerm);
					}}
					type='button'
					className=' bg-zinc-300 rounded-md shadow-sm dark:shadow-md shadow-zinc-400 dark:shadow-black dark:bg-zinc-700 dark:text-lime-600 absolute pl-2 pr-2 ml-2' >
            Search
				</button>
			</div>
			<div
				className='flex flex-col w-full'>
				{recepies?.length > 0 ? (
					<div>
						{recepies.map(recepie => (
							<RecepieCard key={recepie.title} recepie={recepie} />
						))}
					</div>
				) : (
					<div>
						<h1>No Movies found !</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Recepie;
