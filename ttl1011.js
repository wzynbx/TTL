(() => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let cnt = 0, line1 = null, line2 = null;
    rl.on('line', (line) => {
        if (cnt === 0) {
            line1 = line; cnt++;
        }
        else if (cnt === 1) {
            line2 = line; cnt++;
            let regex = eval("/[^"+line2+"]/g");//由字符串得到正则表达式
            let arr = line1.match(regex);
            console.log(arr.join(''));
            process.exit(0);
        }
    });
})();