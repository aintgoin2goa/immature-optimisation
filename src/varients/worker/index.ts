import { BASE } from '../../lib/config';
type Callback = (val: number) => void;

export const start = (end: Callback) => {
    const worker = new Worker('worker.ts');
    worker.onmessage = e => {
        const [event, data] = e.data;
        if (event === 'end') {
            end(data);
        }
    };
    worker.postMessage(['start', BASE]);
};
