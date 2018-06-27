exports.up = function(knex, Promise) {
  return knex.schema.createTable("likes", table => {
    table.increments("id")
    table.integer("user_id").notNullable()
    table.integer("post_id").notNullable()
    table.foreign("user_id").references("users.id").onDelete("CASCADE")
    table.foreign("post_id").references("posts.id").onDelete("CASCADE")
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("likes");
};
