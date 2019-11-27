import { BASE, TRACK_PROGRESS } from '../../lib/config';

type Callback = (val: number) => void;

export const start = (end: Callback, onProgress: Callback) => {
    const max = Math.pow(BASE, 7);
    let result = 0;
    for (let i = 0; i < max; i++) {
        result += Math.atan(i) * Math.tan(i);
        if (TRACK_PROGRESS) {
            onProgress(result);
        }
    }
    end(result);
};
