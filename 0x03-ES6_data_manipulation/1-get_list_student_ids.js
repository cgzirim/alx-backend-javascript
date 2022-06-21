export default function getListStudentIds(array) {
  /* Returns an array of ids from a list of object */

  if (Array.isArray(array)) {
    return array.map((obj) => obj.id);
  }

  return [];
}
