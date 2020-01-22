class Student {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hello, I'am ${this.name}`);
        
    }
}

const stud = new Student('Alex');

const student = Reflect.construct(Student,['Igor']);

// console.log(student.name);

// Reflect.apply(student.greet, {name: 'Tester'}, []);


console.log(Reflect.ownKeys(student));

 
student.age = 24;
console.log(student.age);

Reflect.preventExtensions(student);
student.age = 4;
console.log(student.age);

console.log(Reflect.isExtensible(student));
