exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id")
    table.string("user_image").notNullable().defaultsTo("")
    table.string("username").notNullable().defaultsTo("")
    table.string("email").notNullable().defaultsTo("")
    table.string("password").notNullable().defaultsTo("")
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
