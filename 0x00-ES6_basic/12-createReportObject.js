export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesArray) { return Object.keys(employeesArray).length; },
  };
  return reportObj;
}
