import React from 'react';

const CalorieCard = () => (
	<div className=' w-1/5 flex flex-col gap-1 text-zinc-900 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 p-3 rounded-2xl border-4 border-lime-900 dark:border-lime-700' >
		<h1
			className=' text-2xl underline underline-offset-4 text-center'
		>
            Food Name
		</h1>
		<span>Serving size: num</span><p/>
		<span>Calories: num</span><p/>
		<span>Protein: num</span><p/>
		<span>total fat: num</span><p/>
		<span>saturated fat: num</span><p/>
		<span>sodium: num</span><p />
		<span>carbs total: num</span><p/>
		<span>finer: num</span><p/>
		<span>sugar: num</span><p/>
		<span>potasium: num</span><p/>
		<span>colesterol: num</span><p/>
	</div>
);

export default CalorieCard;
