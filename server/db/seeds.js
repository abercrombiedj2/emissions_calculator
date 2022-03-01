use emissions_calculator;
db.dropDatabase();

db.users.insertMany([
  {
    "userName": "Michelangelo",
    "landTravel": 4,
    "airTravel": 1,
    "food": 4,
    "lifestyle": 5,
    "electricity": 1,
    "gas": 1,
    "total": 16
  },
  {
    "userName": "Leonardo",
    "landTravel": 3,
    "airTravel": 2,
    "food": 4,
    "lifestyle": 5,
    "electricity": 2,
    "gas": 2,
    "total": 18
  },
  {
    "userName": "Donatello",
    "landTravel": 2,
    "airTravel": 3,
    "food": 4,
    "lifestyle": 5,
    "electricity": 3,
    "gas": 3,
    "total": 20
  },
  {
    "userName": "Raphael",
    "landTravel": 1,
    "airTravel": 4,
    "food": 4,
    "lifestyle": 5,
    "electricity": 4,
    "gas": 4,
    "total": 22
  },
  
]);