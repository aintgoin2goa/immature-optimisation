import {BASE} from '../config';
import { run } from './src/run.rs';

export const start = (onprogress, end) => {
	const result = run(BASE);
	onprogress(result);
	end();
}