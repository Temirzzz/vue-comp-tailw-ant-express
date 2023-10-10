import { connection } from '../config/config.js'

class TodosService {
  async loadTodos(page) {
    const limit = 10
    const offset = (page - 1 ) * limit

    if(offset === -10) return

    const [data] = await connection.query(`SELECT * FROM todos limit ? offset ?`, [+limit, +offset])
    const [totalPagesData] = await connection.query(`SELECT count(*) as count FROM todos`)

    return {
      data,
      totalPagesData,
      limit,
      offset
    }
  }

  async createTodo(title) {
    return await connection.query(`INSERT INTO todos (title, completed) VALUES (?, ?)`, [title, false])
  }

  async toggleDoneTodo(completed, id) {
    return await connection.query(`UPDATE todos SET completed = ?  WHERE id= ?`, [completed, id])
  }

  async deleteTodo(id) {
    return await connection.query(`DELETE FROM todos WHERE id= ?`, [id])
  }
}

export default new TodosService()