function createInt8TypedArray(length, position, value) {
  const uint8 = new Uint8Array(length);
  uint8[position] = value;
  return uint8;
}

export default createInt8TypedArray;
