export default function iterateThroughObject(reportWithIterator) {
  const employeeList = [...Object.values(reportWithIterator)];
  const str = '';

  for (let employee of employeeList) {
    str.push("|");
    if (employee !== employeeList[employeeList.length - 1]) {
        str.push("|");
    }
  }
  return str;
}
