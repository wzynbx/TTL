function test1_2() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    })
    rl.on('line', (line) => {
        let a = (line.match(/\d+/g));
        if (a == null)
            console.log('No digits');
        else {
            let index = 0, i = 1;
            for (; i < a.length; i++) {
                if (a[i].length > a[index].length) {
                    index = i;
                }
            }
            console.log(a[index]);
        }
        process.exit(0);
    })
}
test1_2();
