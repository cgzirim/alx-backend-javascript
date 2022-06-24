import Subject from "./subjects/Subject"

export const cpp = new Subject.Cpp();
export const java = new Subject.Java();
export const react = new Subject.React();

export const cTeacher : Subjects.Teacher = {
    firstName: "Betty",
    lastName: "Holberton",
    experienceTeachingC: 10
}

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());