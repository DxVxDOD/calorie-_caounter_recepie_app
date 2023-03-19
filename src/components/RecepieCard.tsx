import React from 'react';
import {type RecepieData} from '../types/myTypes';

const RecepieCard = ({recepie}: {recepie: RecepieData}) => (
	<div
		className='m-5 p-5 text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800
        rounded-2xl border-4 border-lime-900 dark:border-lime-700'>
		<div
			className='bg-zinc-100 dark:bg-zinc-700 text-xl text-center
            rounded-xl border-2 border-zinc-400 dark:border-zinc-900
            p-3 m-3 dark:shadow-md dark:shadow-black shadow-md shadow-zinc-800'>
			<h1>{recepie.title}</h1>
		</div>
		<div
			className='bg-zinc-100 dark:bg-zinc-700
            rounded-xl border-2 border-zinc-400 dark:border-zinc-900 p-3 m-3
            dark:shadow-md dark:shadow-black shadow-md shadow-zinc-800'>
			<span>Ingredients: {recepie.ingredients}</span>
		</div>
		<div
			className='bg-zinc-100 dark:bg-zinc-700
            rounded-xl border-2 border-zinc-400 dark:border-zinc-900 p-3 m-3
            dark:shadow-md dark:shadow-black shadow-md shadow-zinc-800'>
			<span>Serves: {recepie.servings}</span>
		</div>
		<div
			className='bg-zinc-100 dark:bg-zinc-700
            rounded-xl border-2 border-zinc-400 dark:border-zinc-900 p-3 m-3
            dark:shadow-md dark:shadow-black shadow-md shadow-zinc-800'>
			<span>Instructions: {recepie.instructions}</span>
		</div>
	</div>
);

export default RecepieCard;
