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
       let pickVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let pickViking = this.vikingArmy[pickVikingIndex];
       let pickSaxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
       let pickSaxon = this.saxonArmy[pickSaxonIndex];

       let attackResultViking = pickSaxon.receiveDamage(pickViking.strength);

       if(pickSaxon.health <= 0) {
          this.saxonArmy.splice(pickSaxonIndex, 1);
       }
       return attackResultViking;      
   }

   saxonAttack() {
    let pickVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let pickViking = this.vikingArmy[pickVikingIndex];
   let pickSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
   let pickSaxon = this.saxonArmy[pickSaxonIndex];

   let attackResultSaxon = pickViking.receiveDamage(pickSaxon.strength);

   if(pickViking.health <= 0) {
      this.vikingArmy.splice(pickVikingIndex, 1);
   }
   return attackResultSaxon;
   }

   showStatus () {
       if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
       } else if (this.vikingArmy.length ===0) {
           return "Saxons have fought for their lives and survived another day...";
       } else if (this.saxonArmy.length !==0 && this.vikingArmy.length !==0){
           return "Vikings and Saxons are still in the thick of battle.";
       }
   }

}