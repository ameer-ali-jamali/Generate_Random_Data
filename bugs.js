const mongoose = require("mongoose");
const moment = require("moment");
const faker = require("faker");

function generateRandomBug() {
  const bug = {
    title: faker.lorem.sentence(),
    userType: faker.random.arrayElement(["Business", "User"]),
    date: moment(faker.date.past()).valueOf(), // Generate a random past date
    status: faker.random.arrayElement(["COMPLETE", "IN_PROGRESS", "NOT_FIXED"]),
    isActive: faker.random.boolean(),
  };

  if (bug.userType === "Business") {
    // Generate a random ObjectId for Business and assign it to businessId
    bug.businessId = mongoose.Types.ObjectId();
    // Assign userId to null for Business-type bugs
    bug.userId = null;
  } else if (bug.userType === "User") {
    // Generate a random ObjectId for User and assign it to userId
    bug.userId = mongoose.Types.ObjectId();
    // Assign businessId to null for User-type bugs
    bug.businessId = null;
  }

  return bug;
}

// Usage example:
const randomBug = generateRandomBug();
console.log(randomBug);
