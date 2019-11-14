import { BASE } from '../config';


export const start = (onProgress, end) => {
	const max = Math.pow(BASE, 7);
	let result = 0;
	for(let i = 0; i < max; i++){
		result += Math.atan(i) * Math.tan(i);
		onProgress(result);
	}
	end();
}

