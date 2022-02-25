use emissions_calculator;
db.dropDatabase();

db.users.insertMany([
  {
    "userName": "Chris M",
    "travel": 1,
    "food": 4,
    "home": 5
  },
  {
    "userName": "David B",
    "travel": 3,
    "food": 7,
    "home": 2
  },
  {
    "userName": "Paola G",
    "travel": 7,
    "food": 8,
    "home": 3
  },
  {
    "userName": "David A",
    "travel": 3,
    "food": 4,
    "home": 9
  }
]);