import Teacher from './Teacher';

namespace Subjects {
    export class Subject {
        teacher: Teacher;
        constructor(teacher: string) {
            this.teacher = Teacher;
        }
        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}