import {BASE} from '../config';
import module from './crate/Cargo.toml';

export const start = (onprogress, end) => {
	const result = module.run(BASE, onprogress);
	onprogress(result);
	end();
}