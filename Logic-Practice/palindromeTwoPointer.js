let string = "madam";

let left = 0;

let right = string.length-1;

let isPalindrome = true;


while(left<right){

  if(string[left] !== string[right]){
     isPalindrome = false;
    break;   
  }
  else {
    left++;
    right--;
  }
}

console.log("is palindrome:",isPalindrome)