{
  // polymorphisom
  class Person {
    getSleep() {
      console.log(`A person sleeps 8 hours a day`);
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log(`A student sleeps 7 hours a day`);
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`A developer sleeps 6 hours a day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // area = pi * r * r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  // area = height * width
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);

  //
}
