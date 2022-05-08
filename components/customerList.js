import Link from "next/link";

const CustomerList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, name }) => {
        return (
          <li key={id}>
            <Link href={"posts/[id]"} as={`posts/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CustomerList;
