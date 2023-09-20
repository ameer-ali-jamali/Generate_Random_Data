const mongoose = require("mongoose");
const faker = require("faker");

function generateRandomReportType() {
    const reportType = {
        name: faker.random.word(), // Generates a random word as the report type name
    };

    return reportType;
}

// Usage example:
const randomReportType = generateRandomReportType();
console.log(randomReportType);
