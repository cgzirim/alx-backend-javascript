export default function getStudentsByLocation(students, city) {
  /* Returns objects of students who are located in a specific city. */
  return students.filter((student) => student.location === city);
}
