function countOccurrences(string, checkString) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === checkString) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
