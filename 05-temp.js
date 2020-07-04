function test1_1() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    })
    rl.on('line', (line) => {
        let a = JSON.parse(line);
        //console.log(a);        
        a = a.map((value) => {
            return +value;
        })
        let set = new Set(a);
        a = [...set].sort((x, y) => x - y);
        a = a.join(',');
        console.log(a);
        process.exit(0);
    })
}
test1_1();
