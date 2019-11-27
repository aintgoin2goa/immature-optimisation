import { BASE } from '../../lib/ts/config';

type Callback = (val: number) => void;

export const start = (end: Callback, onProgress?: Callback) => {
    const max = Math.pow(BASE, 7);
    let result = 0;
    for (let i = 0; i < max; i++) {
        result += Math.atan(i) * Math.tan(i);
        if (onProgress) {
            onProgress(result);
        }
    }
    end(result);
};
