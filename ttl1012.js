(() => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line', (line) => {
        let a
        console.log('2^'+n +' = '+Math.pow(2,n));
        process.exit(0);
    });
})();