#include <iostream>
#include <set>
using namespace std;

// Money Splitwise Algorithm

int main()
{
    int no_of_transactions;
    int friends;
    cin >> no_of_transactions;
    cin >> friends;
    int x, y, amount;
    // Make a 1-D Array to Store the Net Amount That Each Person Will Have To Take At The End
    int net[100000] = {0};
    while (no_of_transactions--)
    {
        cin >> x >> y >> amount;
        net[x] -= amount;
        net[y] += amount;
    }

    multiset<int> m;
    // Init a list and sort it => Multiset
    for (int i = 0; i < friends; i++)
    {
        if (net[i] != 0)
        {
            m.insert(net[i]);
        }
    }

    // Pop out two persons (from left and right)
    // and try to settle them
    int cnt = 0;
    while (!m.empty())
    {
        auto low = m.begin();
        auto high = prev(m.end());
        int debit = *low;
        int credit = *high;
        m.erase(low);
        m.erase(high);
        // settlement
        int settlement_amount = min(-debit, credit);
        cnt++;
        debit += settlement_amount;
        credit -= settlement_amount;
        if (debit != 0)
        {
            m.insert(debit);
        }
        if (credit != 0)
        {
            m.insert(credit);
        }
    }

    cout << cnt;

    return 0;
}