const fs = require('fs');

const baseData = {
    userId: { $oid: '64c4e83dcb2b36174584ef27' },
    subscriptionId: { $oid: '64d7083af03b22de2d6fee65' },
    isCancelled: false,
    updatedAt: { $date: '2023-01-26T22:32:06.560Z' },
    __v: 0,
};

const numRecords = 100;
const records = [];

for (let i = 0; i < numRecords; i++) {
    const newRecord = { ...baseData };
    const createdAt = new Date('2023-01-26T22:32:05.068Z');
    createdAt.setMonth(createdAt.getMonth() + i);
    newRecord.createdAt = { $date: createdAt.toISOString() };
    records.push(newRecord);
}

const dataToWrite = JSON.stringify(records, null, 2);

fs.writeFile('dummy_data.json', dataToWrite, err => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Generated 100 records and saved to "dummy_data.json"');
    }
});
