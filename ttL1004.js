const { CLIENT_RENEG_LIMIT } = require('tls');

function ttL1004() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    })
    rl.on('line', (line) => {
        line = +line;
        // console.log(line,typeof line)
        //C=5×(F−32)/9。
        //Celsius = 65
        console.log("Celsius = " + parseInt(5 * (line - 32) / 9));
        process.exit(0);
    })
}
ttL1004();
