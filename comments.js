const mongoose = require("mongoose");
const faker = require("faker");

mongoose.connect('mongodb://localhost:27017/xplorer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Comment = mongoose.model('Comment', new mongoose.Schema({
    reviewId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    userType: String,
    comment: String,
    flags: [{
        userId: mongoose.Schema.Types.ObjectId,
        userType: String,
        reason: String,
    }],
    createdAt: Date,
    updatedAt: Date,
    isActive: Boolean,
}));

const generateRandomComment = () => {
    const comment = {
        reviewId: mongoose.Types.ObjectId(),
        userId: mongoose.Types.ObjectId(),
        userType: faker.random.arrayElement(["Business", "User"]),
        comment: faker.lorem.paragraph(),
        flags: [],
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        isActive: faker.random.boolean(),
    };

    const flagCount = faker.random.number({ min: 0, max: 5 });
    for (let i = 0; i < flagCount; i++) {
        const flag = {
            userId: mongoose.Types.ObjectId(),
            userType: faker.random.arrayElement(["Business", "User"]),
            reason: faker.lorem.sentence(),
        };
        comment.flags.push(flag);
    }

    return comment;
};

const generateAndInsertComments = async (count) => {
    const commentData = [];

    for (let i = 0; i < count; i++) {
        const newComment = generateRandomComment();
        commentData.push(newComment);
    }

    await Comment.insertMany(commentData);
    console.log(`${count} comments inserted into MongoDB`);

    mongoose.connection.close();
};

generateAndInsertComments(2000); // Change the count as needed
