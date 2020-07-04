function ttL1009() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let n = 0, cnt = 0, expr = [], i = 0, ex = [];
    rl.on('line', (line) => {
        if (cnt === 0) {
            n = +line; cnt++;
        } else if (cnt === 1) {
            cnt++;
            //2/5 4/15 1/30 -2/60 8/3
            let expr = line.split(' ')
            for (i = 0; i < n; i++) {
                let [fz, fm] = expr[i].split('/');
                fz = +fz; fm = +fm;
                let k = parseInt(fz / fm); fz -= k * fm;
                //console.log(k,fz,fm);
                ex.push({ k: k, fz: fz, fm: fm });
            }
            //console.log(ex);
            let s =null;
            s = ex.reduce((s, value) => {
                s.k = s.k + value.k;
                let res = calSum(s, value);

                s.k = res.k;
                s.fz = res.fz;
                s.fm = res.fm;
                //分子分母除去最大公约数
                let gys=gcd(s.fz, s.fm);
                s.fz /=gys;
                s.fm /= gys;
                return s;
            }, { k: 0, fz: 0, fm: 1 });

            //console.log(s);
            if (s.fz == 0) {
                console.log(s.k);
            } else if (s.k == 0)
                console.log(s.fz + "/" + s.fm);
            else if(s.k<0)
                console.log(s.k + " " + (-s.fz) + "/" + s.fm);
            else
                console.log(s.k + " " + s.fz + "/" + s.fm);


            process.exit(0)
        }
    });
}
function calSum(s, value) {
    let tm = lcm(s.fm, value.fm);
    let tz = (s.fz * tm / s.fm + value.fz * tm / value.fm);
    let tk = parseInt(tz / tm); tz -= tk * tm;
    tk += s.k;
    return { k: tk, fz: tz, fm: tm };
}
function gcd(n, m) {
    let r = n % m;
    while (r !== 0) {
        n = m; m = r;
        r = n % m;
    }
    return m;
}
function lcm(n, m) {
    return n / gcd(n, m) * m;
}
ttL1009();