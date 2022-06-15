export default function iterateThroughObject(reportWithIterator) {
  const employeeList = [...Object.values(reportWithIterator[0])];
  const arr = [];

  for (const employee of employeeList) {
    arr.push(employee);
  }
  return arr.toString().replace(/,/gi, ' | ');
}
