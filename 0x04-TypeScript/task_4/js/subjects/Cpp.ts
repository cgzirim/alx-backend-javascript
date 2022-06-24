import Subject from './Subject';
import Teacher from './Teacher';

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (typeof Teacher.experienceTeachingC === "undefined"
            || Teacher.experienceTeachingC === 0) {
                return "No available teacher";
            }
        return `Available Teacher: ${Teacher.firstName}`;
        }
    }
}