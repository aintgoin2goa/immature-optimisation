import * as turbojs from 'turbojs';
import { BASE } from '../../lib/config';

type Callback = (val: number) => void;

export const start = (end: Callback, onProgress: Callback) => {
    const count = Math.pow(BASE, 7);
    const test = turbojs.alloc(count);
    for (let i = 0; i < count; i++) {
        test.data[i] = i;
    }

    turbojs.run(
        test,
        `void main(void){
            vec4 i = read();
            commit(atan(i) * tan(i));
        }`,
    );

    let result = 0;
    test.data.forEach((i: number) => (result += i));
    end(result);
};
