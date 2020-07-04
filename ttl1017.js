function ttl1017() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    });
    rl.on('line', (n) => {
        let isNeg = false, cnt = 0, k = 1;
        if (n[0] == '-') isNeg = true;
        let res = n.match(/[2]/g);
        //console.log(res);

        if (res == null) cnt = 0;
        else cnt = res.length;

        let result=0;
        let len = n.length;
        if(isNeg){
            result=cnt*1.0/(len-1)*1.5;
        }
        else result=cnt*1.0/(len);

        if ((n[len - 1] - '0') % 2 == 0) result *=2;

        let { round } = Math;
        result = round(result * 10000.0) /100.0
        result=result.toFixed(2);
        console.log(result+'%');
        process.exit(0)
    })
}
ttl1017();