#include <bits/stdc++.h>

using namespace std;
typedef long long LL;
const int maxn = 4e5 + 10;
const int inf = 0x3f3f3f3f;
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }

struct farm
{
    int nex, to, val;
} Edge[maxn << 1];
int head[maxn], n, m, tot;
queue<int> q;
int vis[maxn], dis[maxn], mk[maxn];

inline void init()
{
    tot = 0;
    memset(head, -1, sizeof(head));
}
inline void add(int from, int to, int val)
{
    Edge[++tot].to = to;
    Edge[tot].val = val;
    Edge[tot].nex = head[from];
    head[from] = tot;
}
bool spfa(int s)
{
    for (int i = 1; i <= n; ++i)
    {
        mk[i] = vis[i] = 0;
        dis[i] = i == s ? 0 : inf;
    }
    q.push(s);
    vis[s] = 1;
    mk[s]++;
    while (!q.empty())
    {
        int u = q.front();
        q.pop();
        vis[u] = 0;
        for (int i = head[u]; i != -1; i = Edge[i].nex)
        {
            int v = Edge[i].to;
            if (dis[v] > dis[u] + Edge[i].val)
            {
                dis[v] = dis[u] + Edge[i].val;
                if (vis[v])
                    continue;
                vis[v] = 1;
                if (++mk[v] >= n)
                    return 0;
                q.push(v);
            }
        }
    }
    return 1;
}

int main()
{
    scanf("%d %d", &n, &m);
    init();
    for (int i = 1; i <= m; ++i)
    {
        int a, b, val;
        scanf("%d %d %d", &a, &b, &val);
        add(b, a, val);
    }
    for (int i = 0; i <= n; ++i)
    {
        add(0, i, 0);
    }
    int ok = spfa(0);
    if (!ok)
        puts("NO");
    else
    {
        for (int i = 1; i <= n; ++i)
        {
            printf("%d%c", dis[i], i == n ? '\n' : ' ');
        }
    }
    system("pause");
}