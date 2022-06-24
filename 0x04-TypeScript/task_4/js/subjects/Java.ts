import Teacher from './Teacher';


namespace Subjects{
    export class Java {
        experienceTeachingJava?: number;
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            if (typeof Teacher.experienceTeachingJava === "undefined"
            || Teacher.experienceTeachingJava === 0) {
                return "No available teacher";
            }
        return `Available Teacher: ${Teacher.firstName}`;
        }
    }
}
