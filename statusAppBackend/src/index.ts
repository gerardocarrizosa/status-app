import app from './server';
import config from '../config.json';
import mongoose from 'mongoose';
import { pwd } from './pwd'

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 8080);
app.listen(port, () => {
  console.info('Express application started on port: ' + port);
});

const url = `mongodb+srv://gerardo:${pwd}@cluster0.3fcjn.mongodb.net/status-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to database!')
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

