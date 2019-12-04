function run(base: number) {
    const l = Math.pow(base, 7);
    let results = [];
    for (let i = 0; i < l; i++) {
        results[i] = Math.atan(i) * Math.tan(i);
    }
    const result = results.reduce((a: number, b: number) => a + b, 0);
    postMessage(['end', result]);
}

onmessage = function(e) {
    const [title, arg] = e.data;
    if (title === 'start') {
        run(arg);
    }
};
