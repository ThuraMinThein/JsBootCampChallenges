function reverseString(str) {
  let reversedText = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedText += str[i];
  }
  return reversedText;
}

module.exports = reverseString;

reverseString("hello");
