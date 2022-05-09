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
  try {
    // POSTS
    const jsonResPosts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    var posts = await jsonResPosts.json();

    // CUSTOMERS
    const jsonResCustomers = await fetch("http://localhost:3000/api/customers");
    var { data: customers } = await jsonResCustomers.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      posts,
      customers,
    },
  };
}

export default Home;
