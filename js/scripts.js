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
$(function(){
  var allAnimals = new AllAnimals();
  $("#add-new-pet").click(function(){
    $("form#new-pet").show();
  });

  $("form#new-pet").submit(function(){
    event.preventDefault();

    $("form#new-pet").hide();
    var animalName = $("#name").val();
    var animalBreed = $("#breed").val();
    var animalAge = $("#age").val();
    var animalType = $("#animal-type").val();
    var animalGender = $("#animal-gender").val();

    var pet = new Animal (animalName, animalType, animalBreed, animalAge, animalGender);

    allAnimals.animals.push(pet);

  });

  function populatelist(animallist){
    animallist.forEach();
  }

});
