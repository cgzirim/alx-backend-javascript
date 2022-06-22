interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}
