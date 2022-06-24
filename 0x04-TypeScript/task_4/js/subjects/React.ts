import Teacher from './Teacher';


namespace Subjects{
    export class React {
        experienceTeachingReact?: number;
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            if (typeof Teacher.experienceTeachingReact === "undefined"
            || Teacher.experienceTeachingReact === 0) {
                return "No available teacher";
            }
        return `Available Teacher: ${Teacher.firstName}`;
        }
    }
}
