import React, {useEffect, useState} from 'react';
import {type FoodNutritionData} from '../types/myTypes';
import ErrorData from './ErrorData';

const TotalNutrientsCard = ({foods}: {foods: FoodNutritionData[]}) => {
	const [caloeies, setCaloeies] = useState(0);
	useEffect(() => {
		if (foods.length > 0) {
			const totalCaloriesArray: number[] = foods.map(food => food.calories);
			const totalCalories = totalCaloriesArray.reduce((a, b) => a + b);
			setCaloeies(totalCalories);
		} else {
			console.log('error');
		}
	}, [foods]);

	return (
		<div
			className='w-1/6 right-10 top-24 absolute dark:bg-zinc-800 bg-zinc-200
			border-4 dark:border-orange-600 border-orange-800 rounded-2xl'>
			<h1
				className=' text-2xl m-2 p-2 text-center bg-zinc-100 dark:bg-zinc-700
				rounded-lg border-2 border-zinc-400 dark:border-zinc-900 dark:shadow-md dark:shadow-black shadow-md shadow-zinc-700'>
				Total Calories: {caloeies}
			</h1>
		</div>
	);
};

export default TotalNutrientsCard;
