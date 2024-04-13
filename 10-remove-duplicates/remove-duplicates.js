function removeDuplicates(array) {
  let updatedArray = [array[0]];
  for (let i = 0; i < array.length; i++) {
    if (!updatedArray.includes(array[i])) {
      updatedArray.push(array[i]);
    }
  }
  return updatedArray;
}

module.exports = removeDuplicates;
