function ttl1016() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    });
    let cnt = 0, n, ids = [], flag = true;
    let weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    let z = 0, m = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    rl.on('line', (line) => {
        if (cnt == 0) {
            cnt++; n = +line;
        } else if (cnt <= n + 1) {
            cnt++;
            let res = line.substr(0, 17).match(/\d+/g);
            if (res[0].length < 17) {
                flag = false;
                console.log(line);
            } else {
                let arr = res[0].split('')
                    .map((value => value = +value));
                let s = 0;
                for (let i = 0; i < 17; i++) {
                    s += arr[i] * weights[i];
                }
                z = s % 11;
                if (line[17] !== m[z]) {
                    flag = false;
                    console.log(line);
                }
            }
            if (cnt == n + 1) {
                if (flag == true)
                    console.log('All passed')
                process.exit(0)
            }
        }
    })
}
ttl1016();