import { BASE } from '../../lib/config';
import module from './crate/Cargo.toml';

type Callback = (val: number) => void;

export const start = (end: Callback) => {
    const result = module.run(BASE);
    end(result);
};
