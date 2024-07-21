// HTML Comment: The output is in the console

// Exercise 1:
// Define a filter function on the String object.
String.prototype.filter = function (bannedWords) {
    let words = this.split(' ');
    return words.filter(word => !bannedWords.includes(word)).join(' ');
};

console.log("This house is not nice!".filter(['not']));

// Exercise 2:
// Write a BubbleSort algorithm on the Array object.
Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]; // Swap elements
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3:
// Create a Teacher object derived from a Person function constructor and implement the teach method.

// Using Function Constructor:
function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

const teacher1 = new Teacher('John');
teacher1.teach('Math');


// Using Object.create:
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

function createTeacher(name) {
    let teacher = Object.create(personPrototype);
    teacher.name = name;
    teacher.teach = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    };
    return teacher;
}

const teacher2 = createTeacher('Jane');
teacher2.teach('Science');




// Exercise 4:
// Create Person, Student, and Professor objects.

// Using Prototype Approach:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student = new Student('Alice', 21, 'Computer Science');
student.greeting();
student.salute();

const professor = new Professor('Dr. Smith', 50, 'Physics');
professor.greeting();
professor.salute();



// Using Function Constructor Approach:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function () {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function () {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student = new Student('Alice', 21, 'Computer Science');
student.greeting();
student.salute();

const professor = new Professor('Dr. Smith', 50, 'Physics');
professor.greeting();
professor.salute();

