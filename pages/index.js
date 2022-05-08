import CustomerList from "../components/customerList";
import PostList from "../components/postList";

const Home = ({ posts, customers }) => {
  return (
    <>
      <h2>Customer List</h2>
      <CustomerList list={customers} />

      <hr />

      <h2>Blog Posts</h2>
      <PostList list={posts} />
    </>
  );
};

export async function getStaticProps() {
  let posts = [];
  let customers = [];

  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => (posts = data));

  await fetch("http://localhost:3000/api/customer")
    .then((res) => res.json())
    .then((data) => (customers = data));

  return {
    props: {
      posts,
      customers,
    },
  };
}

export default Home;
