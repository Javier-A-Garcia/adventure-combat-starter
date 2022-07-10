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
