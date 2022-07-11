class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = []
    this.strength = 10;
    this.health = 100;

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

  takeItem(itemName) {

    // Fill this in
    let targetItem = this.currentRoom.getItemByName(itemName);
    let i = this.currentRoom.items.indexOf(targetItem);

    if (i > -1) {
        this.currentRoom.items.splice(i, 1);
        this.items.push(targetItem);
        if (targetItem.modifier) {
          this.strength += targetItem.modifier;
        }
    }
  }

  applyDamage(amount) {
    // Fill this in
    if (amount >= this.health) {
      this.health = 0
      this.die();
    } else this.health -= amount

  }

  die() {
    // Fill this in
    this.items.forEach(el => this.currentRoom.items.push(el));
    this.items = [];
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
