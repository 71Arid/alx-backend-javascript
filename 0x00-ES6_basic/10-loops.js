export default function appendToEachArrayValue(array, appendString) {
  let arr = [];
  for (let idx of array) {
    let value = appendString + idx;
    arr.push(value);
  }

  return arr;
}
