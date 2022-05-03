import { Fragment } from "react";
import { useRouter } from "next/router";

const Article = () => {
  const {
    query: { title, id },
  } = useRouter();

  return (
    <Fragment>
      <h1>Article {title}</h1>
      
      <h2>
        ID:<label>{id}</label>
      </h2>
    </Fragment>
  );
};

export default Article;
