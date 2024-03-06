export default function createIteratorObject(report) {
  const arr = [];
  const allEmp = report.allEmployees;
  for (const dep in allEmp) {
    if (Object.hasOwn(allEmp, dep)) {
      const names = allEmp[dep];
      for (const name of names) {
        arr.push(name);
      }
    }
  }
  return arr[Symbol.iterator]();
}
