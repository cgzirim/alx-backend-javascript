export default function getListStudentIds(array) {
  /* Returns an array of ids from a list of object */
  if (Array.isArray(array)) {
    let ids = [];
    array.forEach((element) => {
      if (Object.keys(element).includes('id')) {
        ids.push(element.id);
      }
    });
    return ids;
  }
  return [];
}
