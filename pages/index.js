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
          <Link href="/articles">
            <a>Article</a>
          </Link>
        </li>
      </ul>
      {/* Article Routes  */}
      <h2>Article</h2>
      <ul>
        <li>
          <Link href="/articles?title=1&id=1">
            <a>Article Main Page</a>
          </Link>
        </li>
        <li>
          <Link href="/articles/[title]" as="/articles/article-1">
            <a>Article Handle Dynamic title</a>
          </Link>
        </li>
        <li>
          <Link href="/articles/[title]/[id]" as="/articles/article-1/3">
            <a>Article3</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
