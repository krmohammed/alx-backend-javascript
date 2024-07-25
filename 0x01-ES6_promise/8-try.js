export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by zero');
  } else {
    return numerator / denominator;
  }
}
