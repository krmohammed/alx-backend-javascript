export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    let value = idx;
    array[array.indexOf(idx)] = appendString + value;
  }

  return array;
}