
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('Projects').insert([
    {
      id: 1,
      name: 'Project Management App Back-end',
      description: 'API and database for managing projects and actions',
      is_complete: false
    },
    {
      id: 2,
      name: 'Project Management App Front-end',
      description: 'User interface for the Project Management app',
      is_complete: false
    },
    {
      id: 3,
      name: 'My Awesome Project',
      description: 'The one project to rule them all',
      is_complete: false
    }
  ])
}
