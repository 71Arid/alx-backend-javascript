export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(all) {
      const number = Object.keys(all).length;
      return number;
    },
  };
  return obj;
}
