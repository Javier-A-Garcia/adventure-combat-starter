const { Item } = require('./item');

class Weapon extends Item {
  constructor(name, description, modifier) {
    super(name, description);
    this.modifier = modifier;

  }
}

module.exports = {
  Weapon,
};
