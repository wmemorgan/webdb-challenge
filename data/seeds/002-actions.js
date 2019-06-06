
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('Actions').insert([
    {
      id: 1,
      project_id: 1,
      description: 'Fork and Clone Repository',
      notes: 'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
      is_complete: false
    },
    {
      id: 2,
      project_id: 1,
      description: 'Install Dependencies',
      notes: 'Remember to cd into the folder where the Project was cloned',
      is_complete: false
    },
    {
      id: 3,
      project_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
      is_complete: false
    },
    {
      id: 4,
      project_id: 3,
      description: 'Initiate project',
      notes: 'Use software development workflow',
      is_complete: false
    },
    {
      id: 5,
      project_id: 2,
      description: 'Create front-end client repository',
      notes: "Run `create-react-app client`",
      is_complete: false
    },
  ])
}
