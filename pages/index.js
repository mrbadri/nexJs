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
      {/* Article Routes  */}
      <h2>Article</h2>
      <ul>
        <li>
          <Link href="/article?title=1&id=1">
            <a>Article1</a>
          </Link>
        </li>
        <li>
          <Link href="/article?title=2&id=2">
            <a>Article2</a>
          </Link>
        </li>
        <li>
          <Link href="/article?title=3&id=3">
            <a>Article3</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
