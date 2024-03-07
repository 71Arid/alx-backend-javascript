export default function iterateThroughObject(reportWithIterator) {
  let str = [];
  for (const value of reportWithIterator) {
    str.push(value);
  }
  return str.join(' | ');
}
