import { BASE } from '../../lib/config';

type Callback = (val: number) => void;

export const start = (end: Callback) => {
    const max = Math.pow(BASE, 7);
    let resultArr = [];
    for (let i = 0; i < max; i++) {
        resultArr[i] = Math.atan(i) * Math.tan(i);
    }

    const result = resultArr.reduce((a: number, b: number) => a + b, 0);
    end(result);
};
