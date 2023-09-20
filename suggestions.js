const mongoose = require('mongoose');
const faker = require('faker');
const moment = require('moment');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const SuggestionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'userType', // Dynamic referencing
        },
        userType: {
            type: String,
            enum: ['Business', 'User'],
            required: true,
        },
        date: {
            type: Number,
            default: moment().valueOf(),
        },
        status: {
            type: String,
            enum: ['NOT_RELEVANT', 'COMPLETE', 'IN_PROGRESS', 'FIXED'],
            default: 'NOT_RELEVANT',
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const Suggestion = mongoose.model('Suggestion', SuggestionSchema);

// Function to generate random data for Suggestion
const generateRandomSuggestions = async (count) => {
    const suggestions = [];

    for (let i = 0; i < count; i++) {
        const randomTitle = faker.lorem.sentence();
        const randomUserId = new mongoose.Types.ObjectId();
        const randomUserType = faker.random.arrayElement(['Business', 'User']);
        const randomDate = moment(faker.date.past()).valueOf();
        const randomStatus = faker.random.arrayElement([
            'NOT_RELEVANT',
            'COMPLETE',
            'IN_PROGRESS',
            'FIXED',
        ]);
        const randomIsActive = faker.random.boolean();

        const suggestion = {
            title: randomTitle,
            userId: randomUserId,
            userType: randomUserType,
            date: randomDate,
            status: randomStatus,
            isActive: randomIsActive,
        };

        suggestions.push(suggestion);
    }

    try {
        await Suggestion.insertMany(suggestions);
        console.log(`${count} Suggestion documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting Suggestion documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomSuggestions(100);
