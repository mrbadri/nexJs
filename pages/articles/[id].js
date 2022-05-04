import { useRouter } from "next/router";

const SingleArticle = () => {
  const {
    query: { id },
  } = useRouter();

  return <>ID: {id}</>;
};

export default SingleArticle;
