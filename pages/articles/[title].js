import { Fragment } from "react";
import { useRouter } from "next/router";

const SingleArticle = () => {
  const {
    query: { title },
  } = useRouter();

  return (
    <Fragment>
      <h1>
        title:<label>{title}</label>
      </h1>
    </Fragment>
  );
};

export default SingleArticle;
