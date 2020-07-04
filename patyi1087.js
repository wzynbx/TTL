function patyi1087() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    });
    rl.on('line', (n) => {
        n = +n;
        let set = new Set();
        for (let i = 1; i <= n; i++) {
            set.add(parseInt(i / 2) + parseInt(i / 3) + parseInt(i / 5));            
        }
        console.log(set.size);        
        process.exit(0);
    })
}
patyi1087();