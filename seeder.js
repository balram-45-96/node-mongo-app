const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();

// Connect to MongoDB
connectDB();

// Sample Users Data
const users = [
  { name: 'Alice Johnson', email: 'alice@example.com' },
  { name: 'Bob Smith', email: 'bob@example.com' },
  { name: 'Charlie Brown', email: 'charlie@example.com' },
  { name: 'David Williams', email: 'david@example.com' },
  { name: 'Emma Davis', email: 'emma@example.com' },
  { name: 'Frank Miller', email: 'frank@example.com' },
  { name: 'Grace Wilson', email: 'grace@example.com' },
  { name: 'Henry Anderson', email: 'henry@example.com' },
  { name: 'Isla Thompson', email: 'isla@example.com' },
  { name: 'Jack Martinez', email: 'jack@example.com' }
];

// Function to Seed Users
const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clears existing users
    await User.insertMany(users);
    console.log('✅ 10 Users Seeded Successfully!');
    mongoose.connection.close(); // Close DB connection
  } catch (err) {
    console.error('❌ Seeding Failed:', err.message);
    mongoose.connection.close();
  }
};

seedUsers();
