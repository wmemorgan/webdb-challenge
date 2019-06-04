
exports.up = async function(knex) {
  await knex.schema.createTable('Projects', tbl => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
    tbl.string('description', 1000)
    tbl.boolean('is_complete').notNullable().defaultTo(false)
  })

  await knex.schema.createTable('Actions', tbl => {
    tbl.increments('id')
    tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('Projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.string('description', 1000).notNullable()
    tbl.string('notes', 1000)
    tbl.boolean('is_complete').notNullable().defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('Actions')
  await knex.schame.dropTableIfExists('Projects')
};
