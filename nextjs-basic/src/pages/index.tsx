import Head from "next/head";
import homeStyles from "@/styles/Home.module.css";

export default function Home() {
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

        </ul>
      </section>
    </div>
  );
}
