
import { BASE } from '../config';

const l = Math.pow(BASE, 7);
let result = 0;
for(let i = 0; i < l; i++) {
	result += Math.atan(i) * Math.tan(i);
}
postMessage(['end']);
