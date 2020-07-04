function ttL1006() {
    //https://www.cnblogs.com/expedition/p/11988844.html
    //整个序列的最大连续长度为12,而对于求一个数n的因子，只需要判定从 2  ~  √n  是否存在因数即可
    //注意：连续因子序列，如60的因子有：2 3 4 5 6 ,答案是3*4*5，而不是2*3*4，因为2*3*4不是因子
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.output
    })
    rl.on('line', (n) => {
        n = +n;
        var prd = null;
        var rootn = Math.sqrt(n);//得到根号N 
        var flag = 0, start, len;//定义是否为乘积因子的标识，乘积序列开始的因子，序列长度 
        for (len = 12; len >= 1; len--)//序列最长为12，递减到1 ，最先遇到结果
        {
            for (start = 2; start <= rootn; start++)//从当前一轮乘积因子的上界从2开始到根号N，注意一定是小于等于，否则有一个点会不过 
            {
                prd = 1;
                for (let i = start; i < start + len; i++)//从当前乘积因子开始乘积，乘积len个长度 
                    prd *= i;
                if (n % prd == 0)//如果找到乘积因子 
                {
                    flag = 1;
                    break;//标识，及时退出 
                }
            }
            if (flag)
                break;
        }
        if (!flag) {//如果未标识为1，说明是质数 
            console.log(1);
            console.log(n);
        }
        else {
            process.stdout.write(len + "\n" + start);
            for (let i = start + 1; i < start + len; i++)//输出，如果只有1个输出一个 
                process.stdout.write('*' + i);
            console.log();
        }
        process.exit(0);
    });
}
ttL1006();
