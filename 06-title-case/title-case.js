function titleCase(str) {
  const loweredString = str.toLowerCase();
  let updatedString = "";
  let checkToChange = false;
  for (let i = 0; i < loweredString.length; i++) {
    if (checkToChange || i === 0) {
      updatedString += loweredString[i].toUpperCase();
      checkToChange = false;
      continue;
    }
    if (loweredString[i] === " ") {
      checkToChange = true;
      updatedString += loweredString[i];
      continue;
    }
    updatedString += loweredString[i];
  }
  return updatedString;
}

module.exports = titleCase;
