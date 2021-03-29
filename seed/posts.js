const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
    {
      "userName": "Jon",
      "avatarImg": "https://i.ibb.co/30GbHgf/blue-orange-and-white-abstract-painting-1183992.jpg",
      "contents": "wjhrqh  rtqer qehrt ruet",
      "imgURL": "https://i.ibb.co/jf7fJkj/multicolored-abstract-painting-1570779.jpg",
    },
  ];

  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
