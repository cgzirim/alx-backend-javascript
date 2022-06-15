export default function createIteratorObject(report) {
  const employeeList = [...Object.values(report)];
  return employeeList;
}
