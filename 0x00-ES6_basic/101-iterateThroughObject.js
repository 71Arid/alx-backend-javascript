export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const value of reportWithIterator) {
    const addedStr = value ? `${value} | ` : '';
    str += addedStr;
  }
  str = str.slice(0, -3);
  return str;
}
