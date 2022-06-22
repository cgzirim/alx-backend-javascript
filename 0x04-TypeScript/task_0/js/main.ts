interface User {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: User = {
    firstName: 'Bella',
    lastName: 'Dan',
    age: 12,
    location: 'Lagos'
}

const student2: User = {
    firstName: 'Stella',
    lastName: 'Cosmus',
    age: 16,
    location: 'Abuja'
}

const studentsList = [student1, student2]