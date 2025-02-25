/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", function(table) {
    table.increments("id").primary()
    table.string("username").notNullable().index()
    table.string("password").notNullable()
    table.string("email").notNullable().unique().index()  // index di gunakkan untuk mempercepat pencarian
    table.string("address").notNullable()
    table.string("profile_image").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
