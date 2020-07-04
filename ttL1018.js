function ttl1018() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    });
    rl.on('line', (time) => {
        let [h, m] = time.split(":")
            .map(value => +value);
        if (h >= 0 && h <= 11 || (h == 12 && m == 0)) {
            console.log("Only " + time + ".  Too early to Dang.");
        } else if (m == 0) {
            console.log('Dang'.repeat(h - 12))
        } else if (m !== 0) {
            console.log('Dang'.repeat(h + 1 - 12))
        }
        process.exit(0)
    })
}
ttl1018();