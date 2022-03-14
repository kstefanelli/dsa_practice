const fib = function (n) {
    if(n <= 1){
        return n;
    }
      return fib(n - 1) + fib(n -2);
  };
  
  //Check if the provided input value, NN, is less than or equal to 1. If true, return NN.
  // Otherwise, the function fib(int N) calls itself, with the result of the 2 previous numbers being added to each other, passed in as the argument. This is derived directly from the recurrence relation: F_{n} = F_{n-1} + F_{n-2}
  // Do this until all numbers have been computed, then return the resulting answer.