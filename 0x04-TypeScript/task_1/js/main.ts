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

// Task 5
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }

}

function createEmployee(salary: number | string) {
    if (typeof salary === 'string') salary = salary.substring(1)
    if (salary <  500) return new Teacher;
    return new Director;
}