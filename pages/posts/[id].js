const SingleArticle = ({ post }) => {
  const { userId, title, id, body } = post;
  
  return (
    <div>
      <h2>{title}</h2>
      <h3>
        <span>Post ID: {id}</span> <span>User ID: {userId}</span>
      </h3>
      <p>{body}</p>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default SingleArticle;
