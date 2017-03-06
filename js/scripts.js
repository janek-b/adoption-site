// Back-End
function Animal(animalName, animalType, breed, age, gender) {
  this.animalName = animalName;
  this.animalType = animalType;
  this.breed = breed;
  this.age = age;
  this.gender = gender;
};

function AllAnimals() {
  this.animals = [];
};

AllAnimals.prototype.getAnimalType = function(animalType) {
  return this.animals.filter(function(animal) {
    return animal.animalType === animalType;
  });
};

var adoptableAnimals = new AllAnimals();
adoptableAnimals.animals.push(new Animal("turbo", "dog", "mutt", 4, "male"))
adoptableAnimals.animals.push(new Animal("Steve", "dog", "mutt", 1, "male"))
adoptableAnimals.animals.push(new Animal("kitty", "cat", "mutt", 1, "male"))
console.log(adoptableAnimals);
console.log(adoptableAnimals.getAnimalType("dog"));

// Front-End
