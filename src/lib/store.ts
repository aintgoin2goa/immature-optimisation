export interface Result {
    name: string;
    time: number;
    result: number;
}

export interface Store {
    results: Result[];
}

const store: Store = {
    results: [],
};

export const addResult = (result: Result) => {
    store.results.push(result);
};

export default store;
