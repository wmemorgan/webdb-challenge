const router = require('express').Router()

// Import data models
const db = require('../data/models')

// Load middleware
const validateProjectId = require('../middleware')
const idBodyCheck = [requiredData, validateProjectId]

// ==== GET ==== //
router.get('/', async (req, res) => {
  try {
    let data = await db.find('Projects')
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id', validateProjectId, async (req, res) => {
  try {
    let data = await db.getProject(req.data.id)
    res.send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== POST ==== //
router.post('/', requiredData, async (req, res) => {
  try {
    let data = await db.insert(req.body, 'Projects')
    res.status(201).send(data)
  }
  catch (err) {
    res.status(500).send(err.message)
  }
})

// ==== PUT ==== //

// ==== DELETE ==== //

// Custom Middleware
const inputDataChecker = (arr, target) => target.every(v => arr.includes(v))
const requiredFields = ['name', 'is_complete']

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