import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h2>Blog Posts</h2>
      <ul>
        {Posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={"articles/[id]"} as={`articles/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
