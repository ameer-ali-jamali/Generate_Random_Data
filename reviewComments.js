const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model directly in the script
const ReviewCommentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
        strict: true,
    }
);

const ReviewComments = mongoose.model('ReviewComments', ReviewCommentSchema);

// Function to generate and save random review comments
const generateAndSaveRandomReviewComments = async (count) => {
    const reviewComments = [];

    for (let i = 0; i < count; i++) {
        const randomName = faker.company.companyName();
        const randomCategoryId = new mongoose.Types.ObjectId();

        const reviewComment = {
            name: randomName,
            category: randomCategoryId,
        };

        reviewComments.push(reviewComment);
    }

    try {
        await ReviewComments.insertMany(reviewComments);
        console.log(`${count} review comments inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting review comments:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random review comments (e.g., 100 comments)
generateAndSaveRandomReviewComments(100);
