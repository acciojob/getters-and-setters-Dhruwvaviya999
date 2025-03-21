class Person {
	constructor(name, age) {
		this._name = name;  // Use private property _name
		this._age = age;    // Use private property _age
	}

	get name() {
		return this._name;  // Return _name to avoid infinite loop
	}

	get age() {
		return this._age;   // Return _age
	}

	set age(newAge) {
		this._age = newAge;  // Correctly update _age
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age);
	}

	study() {
		console.log(`${this.name} is studying`);	
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age);
	}

	teach() {
		console.log(`${this.name} is teaching`);	
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
