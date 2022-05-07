import PostList from "../components/postList";

const Home = ({ posts }) => {
  kdjskscns
  sdinskldnbkls
  return (
    <>
      <style global jsx>
        {`
          h2 {
            display: flex;
            background: green;
          }
          ul {
            color: red;
          }
        `}
      </style>

      <img src="favicon.ico" />
      <h2 style={{ color: "red" }}>Blog Posts</h2>
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
