/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
import {hashPassword} from '../../src/utils/bcrypt.js'

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  const users = [
    {
      username: "johndoe",
      password: await hashPassword("123456"),
      email: "johndoe@example.com",
      address: "Jl. Sudirman No. 10, Jakarta",
      profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkR_se9wD9Ag7Z-PzoqCKknW5FZUHYVqrCQ&s",
    },
    {
      username: "janedoe",
      password: await hashPassword("123456"),
      email: "janedoe@example.com",
      address: "Jl. Thamrin No. 15, Jakarta",
      profile_image: "https://www.hipwee.com/wp-content/uploads/2022/07/hipwee-A94122AD-4A2F-425C-92C5-9CB50273CDBC-954x640.jpeg",
    },
    {
      username: "alice",
      password: await hashPassword("123456"),
      email: "alice@example.com",
      address: "Jl. Merdeka No. 20, Bandung",
      profile_image: "https://example.com/profile3.jpghttps://example.com/profile3.jpg",
    },
    {
      username: "bob",
      password: await hashPassword("123456"),
      email: "bob@example.com",
      address: "Jl. Diponegoro No. 5, Surabaya",
      profile_image: "https://example.com/profile4.jpghttps://example.com/profile4.jpg",
    },
    {
      username: "charlie",
      password: await hashPassword("123456"),
      email: "charlie@example.com",
      address: "Jl. Gatot Subroto No. 8, Medan",
      profile_image: "https://example.com/profile5.jpghttps://example.com/profile5.jpg",
    },
  ];
   await knex('users').insert(users)
};
