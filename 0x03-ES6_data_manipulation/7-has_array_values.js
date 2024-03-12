export default function hasValuesFromArray(set, array) {
  let b;
  if (set instanceof Set && array instanceof Array) {
    for (const a of array) {
      if (set.has(a)) {
        b = true;
      } else {
        b = false;
      }
    }
  }
  return b;
}
