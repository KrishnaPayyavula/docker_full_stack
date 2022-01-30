import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

// const url ='mongodb+srv://docker_user_training:docker_user_training@training-1-p.34kxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongodb:27017/crm');
// mongoose.connect('mongodb+srv://docker_user_training:docker_user_training@training-1-p.34kxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);