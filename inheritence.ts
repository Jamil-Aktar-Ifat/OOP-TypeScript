{
  // oop - inheritence

  // Person Class
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep ${numOfHours} hours`);
    }
  }

  // Student Class
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Jamil", 21, "London");
  student1.getSleep(20);

  // Teacher Class
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} takes ${numOfClass} classes`);
    }
  }

  const teacher = new Teacher("Eshan", 36, "London", "Professor");
  teacher.takeClass(30);
  //
}
