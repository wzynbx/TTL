(() => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', (line) => {
         let arr =line.match(/-?\d+/g)
         .map(value => value = +value)
        .sort((a,b)=>a-b)
        .join('->')
        console.log(arr);
        process.exit(0);
    });
})();