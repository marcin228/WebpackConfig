export default class Animal extends HTMLElement{

    constructor(name){

        super();

        this._name = name;
        this._hunger = 0;

        this.innerText = name;
    }

    eat(food){

        //this.hunger += food.calories;
    }

    get name(){

        return this._name;
    }

    get hunger(){

        return this._hunger;
    }

    update(){
    
        this.innerHTML = this._name + ' / ' + this._hunger;
    }
}