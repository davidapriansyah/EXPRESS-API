/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()

  //ambil id dari categories
  const categories = await knex('categories').select('id')
  await knex('table_name').insert([
    {
      product_name: "Laptop ASUS",
      product_image: "https://example.com/laptop.jpg",
      stock: 10,
      price: 15000000,
      category_id: categories[0].id, // Elektronik
    },
    {
      product_name: "Kaos Polos",
      product_image: "https://example.com/tshirt.jpg",
      stock: 50,
      price: 75000,
      category_id: categories[1].id, // Fashion
    },
    {
      product_name: "Nasi Goreng",
      product_image: "https://example.com/nasigoreng.jpg",
      stock: 30,
      price: 25000,
      category_id: categories[2].id, // Makanan
    },
    {
      product_name: "Oli Mobil",
      product_image: "https://example.com/oli.jpg",
      stock: 20,
      price: 100000,
      category_id: categories[3].id, // Otomotif
    },
    {
      product_name: "Masker Kesehatan",
      product_image: "https://example.com/masker.jpg",
      stock: 100,
      price: 5000,
      category_id: categories[4].id, // Kesehatan
    },
  ]);
};
