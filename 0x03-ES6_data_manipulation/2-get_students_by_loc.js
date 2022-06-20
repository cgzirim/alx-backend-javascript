export default function getStudentsByLocation(array, city) {
    /* Returns an array of objects who are located in a specific city. */
    if (Array.isArray(array)) {
        const filteredElems = array.filter((elem) => {
            return elem.location === city;
        })
        return filteredElems;
      }
      return [];
}
