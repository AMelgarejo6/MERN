//parent Ninja class
class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(`Here are ${this.name}'s stats:\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

//child Sensi class
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        const drink = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    sayName(){
        console.log(`Sensei's name is ${this.name}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.sayName();

const myNinja = new Ninja("Kyle");
myNinja.sayName();