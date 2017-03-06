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

// Front-End
$(function(){
  var allAnimals = new AllAnimals();
  allAnimals.animals.push(new Animal("turbo", "dog", "mutt", 4, "male"))
  allAnimals.animals.push(new Animal("Steve", "dog", "mutt", 1, "male"))
  allAnimals.animals.push(new Animal("kitty", "cat", "mutt", 1, "male"))
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
    populatelist(allAnimals.animals);
    console.log(allAnimal.a)
  });

  function populatelist(animallist){
    $("#adoptable-pets").text("");
    animallist.forEach(function(animal){
      $("#adoptable-pets").append("<li>" + animal.animalName + "</li>")
      $("#adoptable-pets li").last().click(function(){
        $(".pet-name").text(animal.animalName);
        $("#pet-type").text(animal.animalType);
        $("#pet-breed").text(animal.breed);
        $("#pet-age").text(animal.age);
        $("#pet-gender").text(animal.gender);
        $("#pet-modal").modal();
      });
    });
  }

  populatelist(allAnimals.animals);

});
