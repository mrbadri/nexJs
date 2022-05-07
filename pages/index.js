import PostList from "../components/postList";
import style from "./index.module.css";

const Home = ({ posts }) => {
  return (
    <>
      {/* <style global jsx>
        {`
          h2 {
            display: flex;
            background: green;
          }
          ul {
            color: red;
          }
        `}
      </style> */}

      <img src="favicon.ico" />
      <h2 className={style.h2}>Blog Posts</h2>
      <PostList list={posts} />
    </>
  );
};

export async function getStaticProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
