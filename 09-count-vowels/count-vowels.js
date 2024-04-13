function countVowels(str) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    vowels.forEach((vowel) => {
      if (vowel === str[i].toLowerCase()) {
        vowelCount++;
      }
    });
  }
  return vowelCount;
}

module.exports = countVowels;
