function patyi1045() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    });
    rl.on('line', (line) => {
        let [n, ch] = line.split(' ');
        n = +n;
        console.log(ch.repeat(n));
        for (let i = 0; i < Math.round(n / 2)-2; i++) {
            console.log((ch + ' '.repeat(n - 2) + ch));
        }
        console.log(ch.repeat(n));
        process.exit(0);
    })
}
patyi1045();