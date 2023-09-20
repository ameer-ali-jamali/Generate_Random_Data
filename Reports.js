const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/xplorer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Report = mongoose.model('Report', new mongoose.Schema({
    title: String,
    description: String,
    reportedOn: mongoose.Schema.Types.ObjectId,
    reportedBy: mongoose.Schema.Types.ObjectId,
    isActive: Boolean,
}));

const reportedOnId = mongoose.Types.ObjectId('64cdf0bf9048e2c733856a7f');
const reportedById = mongoose.Types.ObjectId('64c4e83dcb2b36174584ef27');

const generateReports = async (count) => {
    const reportData = [];

    for (let i = 0; i < count; i++) {
        const newReport = {
            title: `Report ${i + 1}`,
            description: `Description for Report ${i + 1}`,
            reportedOn: reportedOnId,
            reportedBy: reportedById,
            isActive: true,
        };
        reportData.push(newReport);
    }

    await Report.insertMany(reportData);
    console.log(`${count} reports inserted into MongoDB`);

    mongoose.connection.close();
};

generateReports(20000000); // Change the count as needed
