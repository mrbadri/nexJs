import Link from "next/link";

const PostList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link href={"posts/[id]"} as={`posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
