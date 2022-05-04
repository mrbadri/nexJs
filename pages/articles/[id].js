import { useRouter } from "next/router";

const SingleArticle = () => {
  const route = useRouter();

  console.log(route);

  return <>test</>;
};

export default SingleArticle;
