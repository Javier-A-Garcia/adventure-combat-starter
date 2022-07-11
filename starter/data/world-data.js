module.exports = {
  rooms: [
    {
      id: 1,
      name: "Crossroad",
      description: "You are standing at a crossroad. To the north, east, south and west you see empty space, waiting to be filled.",
      exits: {n: 2, e: 3, w: 4, s: 5}
    },
    {
      id: 2,
      name: "Northern point",
      description: "You are standing at the north point of a crossroad. To the south, you see an empty intersection. To the north, you see a small room.",
      exits: {n: 6, s: 1}
    },
    {
      id: 3,
      name: "Eastern point",
      description: "You are standing at the east point of a crossroad. To the west, you see an empty intersection.",
      exits: {w: 1}
    },
    {
      id: 4,
      name: "Western point",
      description: "You are standing at the west point of a crossroad. To the east, you see an empty intersection.",
      exits: {e: 1}
    },
    {
      id: 5,
      name: "Southern point",
      description: "You are standing at the south point of a crossroad. To the north, you see an empty intersection.",
      exits: {n: 1}
    },
    {
      id: 6,
      name: "Northern end",
      description: "You are standing in the northern most room. To the south, you see the Northern point.",
      exits: {s: 2},
      isDark: true
    }
  ],
  items: [
    {
      name: "rock",
      description: "Just a simple rock",
      room: 1
    },
    {
      name: "sandwich",
      description: "A tasty looking sandwich",
      room: 2,
      isFood: true
    },
    {
      name: "axe",
      description: "An axe of great battle... ness",
      room: 5,
      modifier: 10
    },
    {
      name: "torch",
      description: "A lit torch that seemingly doesn't go out...",
      room: 3,
      light: true
    }
  ],
  enemies: [
    {
      name: "goblin",
      description: "A mean-looking goblin",
      room: 3
    },
  ]
}
