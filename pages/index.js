import PostList from "../components/postList";

const Home = ({ posts }) => {
  return (
    <>
      <h2>Blog Posts</h2>
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
