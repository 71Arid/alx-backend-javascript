export default function iterateThroughObject(reportWithIterator) {
  const str = [];
  for (const value of reportWithIterator) {
    str.push(value);
  }
  return str.join(' | ');
}
