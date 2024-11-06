{
  // class and object

  // class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties

    // constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    // method
    makeSound() {
      console.log(`The ${this.name} make ${this.sound} sound! `);
    }
  }

  const dog = new Animal("German Shepard", "dog", "ghew ghew");
  const cat = new Animal("Jamils cat", "cat", "meaw meaw");
  dog.makeSound();

  //
}
