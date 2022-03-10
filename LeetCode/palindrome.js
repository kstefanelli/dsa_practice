function isPalindrome(str) {
    // For easy comparison, convert to lower case and replace
    // any non- alpha or digit character with empty string.
    str = str.toLowerCase().replace(/[^a-z\d]/g, '');
    
    // Start pointers at beginning (i) and end (j).
    // Move inward until something doesn't match -OR-
    // the two pointers either meet or pass each other.
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    
    // If the loop completed with no equality issues,
    // the string is a valid palindrome.
    return true;
  }