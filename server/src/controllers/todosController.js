import { connection } from '../config/config.js'

class TodosController {
  async load(req, res) {
    try {
      const limit = 10
      const { page } = req.query
      const offset = (page - 1 ) * limit
      if(offset === -10) return
      const [data] = await connection.query(`SELECT * FROM todos limit ? offset ?`, [+limit, +offset])
      const [totalPagesData] = await connection.query(`SELECT count(*) as count FROM todos`)
      const totalPages = Math.ceil(+totalPagesData[0]?.count / limit)
  
      return res.json({
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
      const title = await req.body.title
      await connection.query(`INSERT INTO todos (title, completed) VALUES (?, ?)`, [title, false])
      return res.json({ response: "success" })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id
      await connection.query(`DELETE FROM todos WHERE id= ?`, [id])
      return res.json({ response: "success" })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id
      const completed = await req.body.completed
      await connection.query(`UPDATE todos SET completed = ?  WHERE id= ?`, [completed, id])
      return res.json({ response: "success" })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new TodosController()