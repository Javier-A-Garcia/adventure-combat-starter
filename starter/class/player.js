const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  hit(name) {

    // Fill this in
    let enemy = this.currentRoom.getEnemyByName(name);

    if (enemy) {
      enemy.applyDamage(this.strength);
      enemy.attackTarget = this;

      console.log(`You hit ${enemy.name} for ${this.strength} damage.`)
    } else console.log(`${name} is not a valid target`);

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

  /*

 // Moved to Character class to be inherited by enemy

  takeItem(itemName) {

    // Fill this in
    let targetItem = this.currentRoom.getItemByName(itemName);
    let i = this.currentRoom.items.indexOf(targetItem);

    if (i > -1) {
        this.currentRoom.items.splice(i, 1);
        this.items.push(targetItem);
    }
  }

  dropItem(itemName) {

    // Fill this in
    let targetItem = this.getItemByName(itemName);
    if (targetItem !== undefined) {
        this.removeFromInventory(targetItem);
        this.currentRoom.items.push(targetItem);
    }
  }

  removeFromInventory(item) {
    let i = this.items.indexOf(item);
    this.items.splice(i, 1);
  }

  eatItem(itemName) {
    // Fill this in
    const { Food } = require('./food');

    let targetItem = this.getItemByName(itemName);
    if (targetItem instanceof Food) {
        this.removeFromInventory(targetItem);
    }
  }

  getItemByName(name) {

    // Fill this in
    return this.items.find(el => el.name === name.toLowerCase());
  }
  */

}


module.exports = {
  Player,
};
