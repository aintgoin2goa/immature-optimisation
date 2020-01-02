function run(base: number) {
    const l = Math.pow(base, 7);
    let result = 0;
    for (let i = 0; i < l; i++) {
        result += Math.atan(i) * Math.tan(i);
    }
    postMessage(['end', result]);
}

onmessage = function(e) {
    const [title, ...args] = e.data;
    if (title === 'start') {
        const [base] = args;
        run(base);
    }
};
