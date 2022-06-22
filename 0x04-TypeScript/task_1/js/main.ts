interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}