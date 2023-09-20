const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema and model for Category
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    icon: {
      type: String,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    status: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'DENIED', 'ADMIN_CREATED'],
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

const Category = mongoose.model('Category', CategorySchema);

// Function to generate random data for Category
const generateRandomCategories = async (count) => {
  const categories = [];

  for (let i = 0; i < count; i++) {
    const randomCategory = {
      name: faker.lorem.word(),
      icon: faker.internet.url(),
      parentId: new mongoose.Types.ObjectId(),
      status: faker.random.arrayElement(['PENDING', 'APPROVED', 'DENIED', 'ADMIN_CREATED']),
      businessId: new mongoose.Types.ObjectId(),
      isActive: faker.random.boolean(),
    };

    categories.push(randomCategory);
  }

  try {
    await Category.insertMany(categories);
    console.log(`${count} Category documents inserted into MongoDB`);
  } catch (error) {
    console.error('Error inserting Category documents:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Call the function to generate and save random data (e.g., 50 documents)
generateRandomCategories(50);
