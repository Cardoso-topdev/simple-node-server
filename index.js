// This is the Web Server
import express from 'express'
import morgan from 'morgan';
import bodyParser from 'body-parser'
import cors from 'cors'
import triggerRoutes from './server/routes/index.js';
const server = express();

// create logs for everything
server.use(morgan('dev'));
server.use(cors());
// handle cors policy
let whitelist = ['https://primallypure.com']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//handle json
server.use(bodyParser.json());
// here's our API
// server.use('/api/v1', cors(corsOptions), triggerCustomrules);
server.use('/api/v1', triggerRoutes);

// connect to the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(`Server is running on ${ PORT }!`);
});