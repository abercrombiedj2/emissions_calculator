use emissions_calculator;
db.dropDatabase();

db.users.insertMany([
  {
    "userName": "Chris M",
    "landTravel": 6,
    "airTravel": 1,
    "food": 4,
    "lifestyle": 5,
    "electricity": 3,
    "gas": 2,
    "total": 3
  },
  {
    "userName": "Chris M",
    "landTravel": 5,
    "airTravel": 1,
    "food": 4,
    "lifestyle": 5,
    "electricity": 3,
    "gas": 2,
    "total": 3
  },
  {
    "userName": "Chris M",
    "landTravel": 7,
    "airTravel": 1,
    "food": 4,
    "lifestyle": 5,
    "electricity": 3,
    "gas": 2,
    "total": 3
  },
  {
    "userName": "Chris M",
    "landTravel": 6,
    "airTravel": 1,
    "food": 4,
    "lifestyle": 5,
    "electricity": 3,
    "gas": 2,
    "total": 3
  },
  
]);