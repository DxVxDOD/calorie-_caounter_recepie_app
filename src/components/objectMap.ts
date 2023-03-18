import {type ReactNode} from 'react';

const objectMap = (obj: Response, func: (value: unknown, key: unknown, i: number) => any): ReactNode => {
	const object = Object.fromEntries(
		Object.entries(obj).map(
			([key, value], i) => [key, func(value, key, i)],
		),
	);
	return object;
};

export default objectMap;
