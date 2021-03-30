import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
// import axios from "axios";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts);
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h1>{post.userName}</h1>
      ))}
    </div>
  );
}
export default Posts;
