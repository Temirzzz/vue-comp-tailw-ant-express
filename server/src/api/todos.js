import { Router } from 'express'
import TodosController from '../controllers/todosController.js'
const todosRouter = Router()

todosRouter.get('/', TodosController.load)
todosRouter.post('/add', TodosController.create)
todosRouter.delete('/delete/:id', TodosController.delete )
todosRouter.put('/update/:id', TodosController.edit)

export default todosRouter