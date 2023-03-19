import React from 'react';
import {useLocation} from 'react-router-dom';
import {type FoodNutritionData} from '../types/myTypes';

const Total = () => {
	const location = useLocation();
	const calories = location.state.calories;

	return (
		<div>{calories}</div>
	);
};

export default Total;
