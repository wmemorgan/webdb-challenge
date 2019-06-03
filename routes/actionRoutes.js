const router = require('express').Router()

// Import data models
const db = require('../data/models')

// Load middleware
const idBodyCheck = [requiredData, validateDataId]

// ==== GET ==== //
router.get('/', async (req, res) => {
  try {
    let data = await db.getActions(req.project.id)
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', validateDataId, (req, res) => {
  res.send(req.data)
})

// ==== POST ==== //
router.post('/', idBodyCheck, async (req, res) => {
  try {
    let data = await db.insert(req.body, 'Actions')
    res.status(201).send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== PUT ==== //

// ==== DELETE ==== //

// Custom Middleware
async function validateDataId(req, res, next) {
  try {
    let data = await db.findById(req.params.id, 'Actions')
    if (data) {
      req.data = data
      next()
    } else {
      res.status(404).json({ message: `ID ${req.params.id} not found` })
    }
  }
  catch (err) {
    res.status(500).json(err.message)
  }
}

const inputDataChecker = (arr, target) => target.every(v => arr.includes(v))
const requiredFields = ['project_id', 'description', 'is_complete']

function requiredData(req, res, next) {
  console.log(`inputDataChecker: `, inputDataChecker(Object.keys(req.body), requiredFields))
  if (!req.body || !Object.keys(req.body).length) {
    res.status(400).json({ message: "Missing user data" })
  } else if (!inputDataChecker(Object.keys(req.body), requiredFields)) {
    res.status(400).json({ message: "Missing required field." })
  } else {
    next()
  }
}

module.exports = router