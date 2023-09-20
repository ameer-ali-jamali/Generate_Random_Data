const mongoose = require('mongoose');
const faker = require('faker');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/your_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema and model
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
        },
        // Add other fields from your schema here...
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

const User = mongoose.model('User', UserSchema);

// Function to generate random data for User
const generateRandomUsers = async (count) => {
    const users = [];

    for (let i = 0; i < count; i++) {
        const randomName = faker.name.findName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(randomPassword, salt);

        const randomIsActive = faker.random.boolean();

        const user = {
            name: randomName,
            email: randomEmail,
            password: hashedPassword,
            isActive: randomIsActive,
            // Add other fields as needed...
        };

        users.push(user);
    }

    try {
        await User.insertMany(users);
        console.log(`${count} User documents inserted into MongoDB`);
    } catch (error) {
        console.error('Error inserting User documents:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Call the function to generate and save random data (e.g., 100 documents)
generateRandomUsers(100);
