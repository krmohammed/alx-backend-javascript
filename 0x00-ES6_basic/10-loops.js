export default function appendToEachArrayValue (array, appendString) {
  for (const idx of array) {
    const value = idx;
    array[array.indexOf(idx)] = appendString + value;
  }

  return array;
}
