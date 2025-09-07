class Solution {

    // using memo array
    Integer[] dp = new Integer[9999];
    public int fib(int n) {
        if(n <= 1) return n;
        if(dp[n] != null) return dp[n];
        dp[n] = fib(n-1) + fib(n-2);
        return dp[n];

    }

    // using memo hashmap
    //  HashMap<Integer, Integer> dp = new HashMap<>();
    // public int fib(int n) {
    //     if(n <= 1) return n;
    //     if(dp.containsKey(n)) return dp.get(n);
    //     int val = fib(n-1) + fib(n-2);
    //     dp.put(n, val);
    //     return val;
    // }

    // fibUsingTabulation bottom-up
     public int fibUsingTabulation(int n) {
        int[] dp = new int[n+1];
        if(n <= 1) return n;
        dp[0] = 0;
        dp[1] = 1;
        for(int i = 2; i<= n; i++){
            dp[i] = dp[i-1] + dp[i-2];
        }
        return dp[n];
    }
}
