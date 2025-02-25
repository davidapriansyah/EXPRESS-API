/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    { category_name: "Elektronik", category_code: "ELEC" },
    { category_name: "Fashion", category_code: "FASH" },
    { category_name: "Makanan", category_code: "FOOD" },
    { category_name: "Otomotif", category_code: "AUTO" },
    { category_name: "Kesehatan", category_code: "HEALTH" },
  ]);
};
