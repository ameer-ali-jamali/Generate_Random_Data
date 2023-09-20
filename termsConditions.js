const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const TermsAndConditionsSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const TermsAndConditions = mongoose.model('TermsAndConditions', TermsAndConditionsSchema);

// Function to generate random data for TermsAndConditions
const generateRandomTermsAndConditions = async (count) => {
    const termsAndConditions = [];

    for (let i = 0; i < count; i++) {
        const randomContent = faker.lorem.paragraphs(); // Generate random paragraphs as content
        const randomIsActive = faker.random.boolean();

        const termsAndCondition = {
            content: randomContent,
            isActive: randomIsActive,
        };

        termsAndConditions.push(termsAndCondition);
    }

    try {
        await TermsAndConditions.insertMany(termsAndConditions);
        console.log(`${count} TermsAndConditions documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting TermsAndConditions documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomTermsAndConditions(100);
