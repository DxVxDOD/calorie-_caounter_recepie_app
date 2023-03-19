/* eslint-disable @typescript-eslint/naming-convention */
import React, {useState, useEffect} from 'react';
import CalorieCard from '../components/CalorieCard';
import axios from 'axios';
import type {FoodNutritionData} from '../types/myTypes';

const Home = () => {
	const [foods, setFood] = useState([{
		name: '',
		calories: 0,
		serving_size_g: 0,
		fat_total_g: 0,
		fat_saturated_g: 0,
		protein_g: 0,
		sodium_mg: 0,
		potassium_mg: 0,
		cholesterol_mg: 0,
		carbohydrates_total_g: 0,
		fiber_g: 0,
		sugar_g: 0,
	}]);
	const [searchTerm, setSearchTerm] = useState('');

	const searchFood = (foodQuery: string) => {
		const options = {
			method: 'GET',
			url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
			params: {query: `${foodQuery}`},
			headers: {
				'X-RapidAPI-Key': '2360fdfd74msha2947f11b7f085ap1bec68jsn9cc4e39d2275',
				'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
			},
		};
		axios
			.request(options)
			.then(({data}: {data: FoodNutritionData[]}) => {
				setFood(data);
			})
			.catch((error: any) => {
				console.error(error);
			});
	};

	useEffect(() => {
		searchFood('Oven Chicken breast');
	}, []);

	return (
		<div className='flex flex-col h-full gap-2 align-middle items-center'>
			<h1 className=' text-lime-700 dark:text-lime-600 text-5xl text-center mt-28'>
			Calorie Calculator
			</h1>
			<h2
				className=' text-lime-900 dark:text-lime-700 text-xl text-center'>
		Search for the values of your favoutite foods</h2>
			<div className=' border-solid border-2 rounded-md w-1/2 border-lime-700 dark:border-lime-900 mt-10' >
				<input
					onChange={e => {
						setSearchTerm(e.target.value);
					}}
					value={searchTerm}
					placeholder='Chicken breast'
					type='text'
					className=' border-none outline-none rounded-md w-full placeholder-zinc-900 dark:placeholder-zinc-100
				placeholder:opacity-60 pl-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200'/>
				<button
					onClick={() => {
						searchFood(searchTerm);
					}}
					type='button'
					className=' bg-zinc-300 rounded-md shadow-sm dark:shadow-md shadow-zinc-400 dark:shadow-black dark:bg-zinc-700 dark:text-lime-600 absolute pl-2 pr-2 ml-2' >
					Search
				</button>
			</div>
			<div className=' w-full p-4 flex justify-center flex-wrap gap-5'>
				{foods?.length > 0 ? (
					<div className='container' >
						{foods.map(food => (
							<CalorieCard key={food.name} food={food} />
						))}
					</div>
				) : (
					<div className='empty' >
						<h1>No Movies found !</h1>
					</div>
				)
				}
			</div>
		</div>
	);
};

export default Home;
