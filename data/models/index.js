// Instantiate database instance
const db = require('../dbConfig')

//==== Resource-specific Database Methods ====//
async function getProject(id) {
  let actions = await getActions(id)
  let project = await findById(id, 'Projects')
  return {
    ...project,
    actions 
  }
}

function getActions(id) {
  return db('Actions')
    .where({ project_id: id })
}

//==== Global Database Methods ====//
function find(table) {
  return db(table)
}

function findById(id, table) {
  return db(table)
    .where({ id: Number(id) })
    .first()
    .then(record => record)
}

function insert(data, table) {
  return db(table)
    .insert(data)
    .then(ids => {
      findById(ids[0])
    })
}

function update(id, data, table) {
  return db(table)
    .where({ id })
    .update(data)
    .then(count => {
      if (count > 0) {
        return db(table)
          .where({ id })
          .first()
          .then(record => record)
      }
    })
}

function remove(id, table) {
  return db(table)
    .where({ id })
    .del()
    .then(count => {
      if (count > 0) {
        return {
          message: `${count} ${count > 1 ?
            'records' : 'record'} deleted`
        }
      }
    })
}

module.exports = {
  db,
  find,
  findById,
  insert,
  update,
  remove,
  getProject,
  getActions
}

