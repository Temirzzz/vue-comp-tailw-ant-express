import { Router } from 'express'
const todosRouter = Router()
import { connection } from '../config/config.js'


todosRouter.get('/', (req, res) => {
  const query = `SELECT * FROM todos`
  connection.query(query , (err, result) => {
    if (err) {
      res.status(400).send();
      throw err;
    };

    console.log(result);
    res.status(200).send(result);
  });
})


export default todosRouter