import Head from "next/head";
import homeStyles from "@/styles/Home.module.css";
import { getSortedPostsData } from "../../lib/post";
import { GetStaticProps } from "next";
import Link from "next/link";

export default function Home({allPostsData}:{
  allPostsData:{
    date:string
    title:string
    id:string
  }[]
}) {
  return (
    <div>
      <Head>
        <title>hyeryeon</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[your Self Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd}  ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>BLog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id,date,title})=>(
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
               {title}
              </Link>
            
              <br/>
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps:GetStaticProps = async()=>{
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
}