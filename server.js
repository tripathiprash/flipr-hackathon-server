import express from 'express';
import mongoose from 'mongoose';

const app = express();

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/first try', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  // Additional logic or routes can go here once connected
});

// Test route to check MongoDB connection status
app.get('/test', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send('Connected to MongoDB');
  } else {
    res.send('Not connected to MongoDB');
  }
});

// Other routes and server setup...

const PORT = 3000; // Set your desired port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
