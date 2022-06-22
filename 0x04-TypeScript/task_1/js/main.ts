// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}

// Task 4
class StudentClass {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working'
    }

    displayName() {
        return this.firstName;
    }
}