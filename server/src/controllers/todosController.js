import TodosService from '../services/todosService.js'

class TodosController {
  async load(req, res) {
    try {
      const { page } = req.query
      const { data, totalPagesData, limit } = await TodosService.loadTodos(page)
      const totalPages = Math.ceil(+totalPagesData[0]?.count / limit)
  
      return res.status(200).json({
        data: data,
        page: +page,
        limit: +limit,
        totalPages
      });
  
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const title = req.body.title
      await TodosService.createTodo(title)
      res.status(200).json({ response: "successfully created" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id

      await TodosService.deleteTodo(id)
      res.status(200).json({ response: "successfully deleted" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async toggleDone(req, res) {
    try {
      const id = req.params.id
      const completed = req.body.completed

      await TodosService.toggleDoneTodo(completed, id)
      res.status(200).json({ response: "successfully updated" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
}

export default new TodosController()