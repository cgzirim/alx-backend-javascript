export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    const total = array.reduce((currentTotal, elem) => elem.id + currentTotal, 0);
    return total;
  }
  return 0;
}
