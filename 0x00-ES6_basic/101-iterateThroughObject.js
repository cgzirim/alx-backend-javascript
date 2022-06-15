export default function iterateThroughObject(reportWithIterator) {
  const employeeList = [...Object.values(reportWithIterator)];
  const str = '';

  for (const employee of employeeList) {
    str.push(employee);
    if (employee !== employeeList[employeeList.length - 1]) {
      str.push('|');
    }
  }
  return str;
}
