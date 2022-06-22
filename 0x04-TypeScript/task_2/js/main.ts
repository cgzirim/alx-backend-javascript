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

// Task 6
type isDirector = (employee: object) => true;

function executeWork(employee: object) {
    if (employee instanceof Director) {
        employee.workDirectorTasks();
    }
    if (employee instanceof Teacher) {
        employee.workTeacherTasks();
    }
}

// Task 7
type Subject = 'Math' | 'History';

function teachClass(todayClass: string) {
    if (todayClass === 'Math') return 'Teaching Math';
    if (todayClass === 'History') return 'Teaching History'
}