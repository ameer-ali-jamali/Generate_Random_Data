const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const ShareSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "senderType", // Assuming this is a valid reference
    },
    senderType: {
        type: String,
        enum: ["Business", "User"],
        required: true,
    },
    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipientType", // Assuming this is a valid reference
    },
    recipientType: {
        type: String,
        enum: ["Business", "User"],
        required: true,
    },
    pin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pin',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isSeen: {
        type: Boolean,
        default: false,
    },
});

const Share = mongoose.model('Share', ShareSchema);

// Function to generate random data for Share
const generateRandomShares = async (count) => {
    const shares = [];

    for (let i = 0; i < count; i++) {
        const randomSenderId = new mongoose.Types.ObjectId();
        const randomSenderType = faker.random.arrayElement(['Business', 'User']);
        const randomRecipientId = new mongoose.Types.ObjectId();
        const randomRecipientType = faker.random.arrayElement(['Business', 'User']);
        const randomPinId = new mongoose.Types.ObjectId();
        const randomIsSeen = faker.random.boolean();

        const share = {
            senderId: randomSenderId,
            senderType: randomSenderType,
            recipientId: randomRecipientId,
            recipientType: randomRecipientType,
            pin: randomPinId,
            isSeen: randomIsSeen,
        };

        shares.push(share);
    }

    try {
        await Share.insertMany(shares);
        console.log(`${count} Share documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting Share documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomShares(100);
