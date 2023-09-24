import { Router } from 'express'
import TodosController from '../controllers/todosController.js'
const todosRouter = Router()

todosRouter.get('/todos', TodosController.load)
todosRouter.post('/todos/add', TodosController.create)
todosRouter.delete('/todos/delete/:id', TodosController.delete )
todosRouter.put('/todos/update/:id', TodosController.edit)

export default todosRouter