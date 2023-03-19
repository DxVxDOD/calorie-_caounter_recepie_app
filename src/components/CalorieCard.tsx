import React from 'react';
import {type FoodNutritionData} from '../types/myTypes';

const CalorieCard = ({food}: {food: FoodNutritionData}) => (
	<div className=' w-1/5 flex flex-col p-2 text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800
	rounded-2xl border-4 border-lime-900 dark:border-lime-700' >
		<h1
			className=' text-2xl m-2 p-2 text-center bg-zinc-100 dark:bg-zinc-700
			rounded-lg border-2 border-zinc-400 dark:border-zinc-900 dark:shadow-md dark:shadow-black shadow-md shadow-zinc-700'>
			{(food.name)}
		</h1>
		<div
			className=' rounded-lg border-2 p-3 pl-5 m-2 bg-zinc-100 dark:bg-zinc-700
			border-zinc-400 dark:border-zinc-900 dark:shadow-md dark:shadow-black shadow-md shadow-zinc-700'>
			<span>Serving size: {food.serving_size_g}g</span><p/>
			<span>Calories: {food.calories}</span><p/>
			<span>Protein: {food.protein_g}g</span><p/>
			<span>Total fat: {food.fat_total_g}g</span><p/>
			<span>Saturated fat: {food.fat_saturated_g}g</span><p/>
			<span>Sodium: {food.sodium_mg}mg</span><p />
			<span>Carbs total: {food.carbohydrates_total_g}g</span><p/>
			<span>Fiber: {food.fiber_g}g</span><p/>
			<span>Sugar: {food.sugar_g}g</span><p/>
			<span>Potasium: {food.potassium_mg}mg</span><p/>
			<span>Cholesterol: {food.cholesterol_mg}mg</span><p/>
		</div>
	</div>
);

export default CalorieCard;
