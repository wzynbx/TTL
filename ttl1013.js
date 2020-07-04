(() => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let fact = function (n) {
        return n == 1 ? 1 : n * fact(n - 1)
    }
    rl.on('line', (n) => {
        n = +n;
        let s=1,item=1;
        for(let i=2;i<=n;i++){
            item*=i;
            s+=item;
        }
        console.log(s);
        
        process.exit(0);
    });
})();