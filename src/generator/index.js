import { BASE } from '../config';

function* generator(max) {
	let result = 0;
	for(let i = 0; i < max; i++) {
		result += Math.atan(i) * Math.tan(i);
		yield result;
	}
}


export const start = (onProgress, end) => {
	const max = Math.pow(BASE, 7);
	const runner = generator(max);
	let result;
	while(true){
		result = runner.next();
		if (result.done) {
			break;
		}
		onProgress(result.value);
	}
	end();
}

