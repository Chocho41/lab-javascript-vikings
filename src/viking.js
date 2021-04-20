// Soldier
class Soldier {
    constructor (h, s) {
        this.health = h;
        this.strength = s;

    }
    attack() {
    return this.strength;
    }
    receiveDamage(d) {
    this.health -= d;
    }
}

// Viking
class Viking extends Soldier {
    constructor (n, h, s) {
        super(h, s);
        this.name = n;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(d) {
        this.health -= d;
    if (this.health > 0) {
        return `${this.name} has received ${d} points of damage`;
    } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`;
    }
    }
    battleCry (){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor (h, s) {
        super(h, s);
    }
    attack() {
        return this.strength;
    }
    receiveDamage(d) {
        this.health -= d;
    if (this.health > 0) {
        return `A Saxon has received ${d} points of damage`;
    } else if (this.health <= 0) {
        return `A Saxon has died in combat`;
    }
    }
}   

// War
class War {
    constructor () {}
    vikingArmy = [];
   saxonArmy = [];

   addViking(vikingObject) {
       this.vikingArmy.push(vikingObject);
   }
   addSaxon (saxonObject) {
       this.saxonArmy.push(saxonObject);
   }

   //Armie Attack

   vikingAttack() {
       saxon.receiveDamage(viking.strength);
       if(saxon.health < 0) {
           this.saxonArmy.shift(saxon);
       }

   }
   saxonAttack() {
        viking.health.receiveDamage() = saxon.strength;
        if (viking.health < 0) {
            viking.army.shift(viking);
        }
   }
   showStatus () {
       if (saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
       }
       if (vikingArmy.length ===0) {
           return "Saxons have fought for their lives and survived another day...";
       }
       if (saxonArmy !==0 && vikingArmy !==0){
           return "Vikings and Saxons are still in the thick of battle."
       }
   }

}