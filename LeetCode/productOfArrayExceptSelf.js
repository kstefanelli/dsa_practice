const productExceptSelf = nums => {
    const answer = [];
    
    for (let i = 0, leftExceptSelf = 1; i < nums.length; i++) {
      answer.push(leftExceptSelf);
      leftExceptSelf *= nums[i];
    }
    
    for (let i = nums.length - 1, rightExceptSelf = 1; i >= 0; i--) {
      answer[i] *= rightExceptSelf;
      rightExceptSelf *= nums[i];
    }
    
    return answer;
  };