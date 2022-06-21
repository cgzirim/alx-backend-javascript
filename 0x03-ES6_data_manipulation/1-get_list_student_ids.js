export default function getListStudentIds(array) {
  /* Returns an array of ids from a list of object */

  const ids = [];
  for (const element of array) {
    if (Object.keys(element).includes('id')) {
      ids.push(element.id);
    }
  }
  return ids;
}
