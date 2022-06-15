export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesArray) { return employeesArray.keys().length; },
  };
  return reportObj;
}
