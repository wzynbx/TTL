(() => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.on('line', (line) => {
         line = line.split(' ')         
         .map(value => value = +value)
        .sort((a,b)=>a-b)
        .join('->')
        console.log(line);
        process.exit(0);
    });
})();