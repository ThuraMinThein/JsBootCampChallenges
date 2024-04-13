function isPalindrome(str) {
  const pureString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedText = "";
  for (let i = pureString.length - 1; i >= 0; i--) {
    reversedText += pureString[i];
  }
  if (pureString === reversedText) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
