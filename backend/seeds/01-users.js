exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "Justin Chau",
          email: "chausicle@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuiF.6E0AgyTIr/n7GQCbErIg7LY6R7r6",
          user_image: "https://media.licdn.com/dms/image/C5603AQG7OWbMv2pilQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=zI5fBFbF99t5GZqF6N8NtG7n-4sKoUjQz053y6MeCIE"
        },
        {
          id: 2,
          username: "Robson Farias",
          email: "fariasrobson.rf@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCxHM029Xf9K6QjvtCNsy3xe50wL4xaO",
          user_image: "https://media.licdn.com/dms/image/C5603AQEVajqtwsIPFg/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=nEsn7SwI7RPzmYSi2xj8JUQUdWoo7vn7qVwuaE7GchM"
        },
        {
          id: 3,
          username: "Carl Corsini",
          email: "carl@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuntWxiXbOlzYJTlSoqKMcsPf7T9bEuu.",
          user_image: "https://media.licdn.com/dms/image/C5603AQG-Egj-1qDWrQ/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=yc53raxVJ3Zheyj3uXrhPvcmBjO827OSF60n8KHtqCY"
        },
        {
          id: 4,
          username: "Glen Pegado",
          email: "glen@gmail.com",
          password: "$2a$10$y2MiAwqr5Y0oeQ1YpkcRFuCDc8z5ly4OQS6mr/4qh5lYo5DU7ohWG",
          user_image: "https://media.licdn.com/dms/image/C5603AQEk-tYdV60QqA/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=uJE5IVpobUnBl3irNYnIu1QIegwxToMmkJx-jvy24qk"
        }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};
