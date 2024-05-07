import mongoose from 'mongoose';
import User from './user.js';

const resetUsersCollection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb+srv://tanmay:tanmay123@cluster0.szxx1ij.mongodb.net", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Drop the existing users collection
    await mongoose.connection.dropCollection('users');
    console.log('Dropped users collection');

    // Recreate the users collection with the new schema and indexes
    await mongoose.model('User', User.schema).createCollection();
    console.log('Recreated users collection');

    // Close the MongoDB connection
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error resetting users collection:', error);
  }
};

resetUsersCollection();