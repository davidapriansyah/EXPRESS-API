/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("products", function(table){
        table.increments("id").primary()
        table.string("product_name").notNullable().index()
        table.string("product_image").notNullable()
        table.integer("stock").notNullable()
        table.decimal("price", 10,2).notNullable()
        table.integer("category_id").notNullable()
        table.foreign("category_id").references("id").inTable("categories").onDelete("CASCADE")
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("products")
};
