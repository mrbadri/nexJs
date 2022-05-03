import { Fragment } from "react";
import { useRouter } from "next/router";

const SingleArticle = () => {
  const {
    query: { title, id },
  } = useRouter();

  return (
    <Fragment>
      <h1>
        title:<label>{title}</label>
      </h1>
      <h3>
        ID:<label>{id}</label>
      </h3>
    </Fragment>
  );
};

export default SingleArticle;
