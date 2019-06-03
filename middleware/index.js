// Load database methods
const db = require('../data/models')

//==== Missing Project ID Error handling ====//
async function validateProjectId(req, res, next) {
  try {
    let data = await db.findById(req.params.id, 'Projects')
    if (data) {
      req.data = data
      next()
    } else {
      res.status(404).json({ message: `Project ${req.params.id} not found` })
    }
  }
  catch (err) {
    res.status(500).json(err.message)
  }
}

module.exports = validateProjectId