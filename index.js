import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import getApi from './controllers';
import config from './config';
import setUpConnection from './db';


const app = express();
const port = config.port;
setUpConnection(config.db);

app.use(bodyParser({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use('/', getApi());


app.listen(port, () => {
  console.log(`${config.name} is working on port ${port}`);
});
