//^ Palindrome Number

// function isPalindrome(num) {
//   let originalnum = num;
//   let sum = 0;
//   while (num > 0) {
//     let r = num % 10;
//     sum = sum * 10 + r;
//     num = Math.floor(num / 10);
//   }
//   return (num = sum);
// }
// console.log(isPalindrome(123));

//^ PAlindrome Example-2

// function isPalindrome(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
// console.log(str);
//     revStr += str[i];
//   }
//   if (str == revStr) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not a Palindrome");
//   }
// }
// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("malayalam");
