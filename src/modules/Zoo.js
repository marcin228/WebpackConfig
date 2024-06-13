export default class Zoo{

    constructor(){

        this.animals = [];
        this.animalsNames = new Map();
    }

    addAnimal(animal){

        this.animals[this.animals.length] = animal;
        this.animalsNames.set(animal.name, true);
    }

    isAnimalInZoo(animalName){
    
        if(this.animalsNames.has(animalName))
            return true;

        return false;
    }
}