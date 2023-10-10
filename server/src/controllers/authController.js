
class AuthController {
  async registration(req, res) {
    try {

      return res.status(200).json({ response: "user seccessfuly added" })
      
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async login(req, res) {
    try {
      return res.json({ response: "success" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async logout(req, res) {
    try {
      return res.json({ response: "success" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async activate(req, res) {
    try {
      return res.json({ response: "success" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
  
  async refresh(req, res) {
    try {
      return res.json({ response: "success" })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

  async getUsers(req, res) {
    try {
      return res.json(['123', '234'])
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
}

export default new AuthController()