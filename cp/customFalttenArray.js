function flattenArray(arr, level = Infinity) {
    const flattened = [];
    let currentLevel = 0;
  
    function recursiveFlatten(inputArr) {
      for (let i = 0; i < inputArr.length; i++) {
        if (Array.isArray(inputArr[i]) && currentLevel < level) {
          currentLevel++;
          recursiveFlatten(inputArr[i]);
          currentLevel--;
        } else {
          flattened.push(inputArr[i]);
        }
      }
    }
  
    recursiveFlatten(arr);
    return flattened;
  }

  console.log(flattenArray([1, [2, [33, 4], 5], 6, [7, [8, 9]]],1))   