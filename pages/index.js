import Link from "next/link";

const Home = ({ posts }) => {
  return (
    <>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => {
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

export async function getServerSideProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
