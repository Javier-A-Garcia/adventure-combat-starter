const { Character } = require('./character');
const { Food } = require('./food');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
    this.health = 50;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    let exits = this.currentRoom.getExits();
    let rand = Math.floor(Math.random() * exits.length);
    let nextRoom = this.currentRoom.getRoomInDirection(exits[rand]);
    let prevRoom = this.currentRoom.name;

    this.alert(`${this.name} left the room and went ${exits[rand]}`);
    this.currentRoom = nextRoom;
    this.alert(`${this.name} has entered the room from ${prevRoom}`);
    this.cooldown += 10000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget.applyDamage(this.strength);
    console.log(`${this.name} hit you for ${this.strength} damage.`)
    this.cooldown = 3000;
    this.rest();
  }

  // applyDamage(amount) {
  //   // Fill this in
  // }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else if (this.attackTarget === this.player){
      if (this.health < 25 && this.items.length > 0) {
        this.eatItem(this.items[0].name);
        this.rest();
      } else {
        this.attack();
      }
    } else {
      if (this.currentRoom.items.length > 0) {
        this.currentRoom.items.forEach(el => {
          if (el instanceof Food) {
            this.takeItem(el.name);
          }
        });
      }
      this.randomMove();
      // this.scratchNose();
      this.rest();
    }
    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
