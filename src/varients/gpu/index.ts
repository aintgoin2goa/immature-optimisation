import * as turbojs from 'turbojs';
import { BASE } from '../../lib/config';

type Callback = (val: number) => void;

const fill = (arr: []) => arr.map((_: any, i: number) => i);

const sum = (arr: number[]): number =>
    arr.reduce((a: number, b: number) => a + b, 0);

const glslfunc = `void main(void){
    vec4 i = read();
    commit(atan(i) * tan(i));
}`;

export const start = (end: Callback, onProgress: Callback) => {
    const count = Math.pow(BASE, 7);
    const test1 = turbojs.alloc(Math.floor(count / 2));
    const test2 = turbojs.alloc(Math.ceil(count / 2));
    test1.data = fill(test1.data);
    test2.data = fill(test2.data);

    turbojs.run(test1, glslfunc);

    turbojs.run(test2, glslfunc);
    console.log('length', test1.data.length + test2.data.length);
    const result1 = sum(test1.data);
    const result2 = sum(test2.data);
    const result = result1 + result2;
    end(result);
};
