use emissions_calculator;
db.dropDatabase();

db.usres.insertMany([
  {
    "name": "Chris M",
    "travel": 1,
    "food": 4,
    "home": 5
  },
  {
    "name": "David B",
    "travel": 3,
    "food": 7,
    "home": 2
  },
  {
    "name": "Paola G",
    "travel": 7,
    "food": 8,
    "home": 3
  },
  {
    "name": "David A",
    "travel": 3,
    "food": 4,
    "home": 9
  }
]);