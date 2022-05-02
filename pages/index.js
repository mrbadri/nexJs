import Link from "next/link";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/article">
            <a>Article</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
