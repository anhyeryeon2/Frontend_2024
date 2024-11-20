import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../../lib/post";
import homeStyles from "../../styles/Home.module.css";
import postStyles from "../../styles/Post.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    content: string;
  };
}) {
  return (
    <div className={homeStyles.container}>
            <head>
                <title>{postData.title}</title>
            </head>
            <article>
                <h1 >{postData.title}</h1>
                <div >
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{__html:postData.content}}/>
            </article>
        </div>
    )
}

// 서버에서 동적으로 데이터 가져오기
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
