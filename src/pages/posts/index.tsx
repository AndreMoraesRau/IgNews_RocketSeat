import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>September 9th 2022</time>
            <strong>
              Part of a Major Toronto Street is Now Closed for Construction for
              the Rest of the Year
            </strong>
            <p>
              If you`&apos;`re planning on travelling across College Street anytime
              soon, get ready for a sticky commute. Road closures of varying
              degrees will impact College Street all the way from Bathurst
              Street to Bay Street, for the rest of the year. First,
              between mid-September and mid-November, College Street from
              Augusta Avenue to Spadina Avenue will be reduced to only one
              eastbound lane, with no westbound travel. College Street from St.
              George Street to Spadina Avenue will also be fully closed to all
              vehicular traffic. Travel on Spadina Avenue will not be impacted.
            </p>
          </a>
          <a href="#">
            <time>September 9th 2022</time>
            <strong>
              Part of a Major Toronto Street is Now Closed for Construction for
              the Rest of the Year
            </strong>
            <p>
              If you`&apos;`re planning on travelling across College Street anytime
              soon, get ready for a sticky commute. Road closures of varying
              degrees will impact College Street all the way from Bathurst
              Street to Bay Street, for the rest of the year. First,
              between mid-September and mid-November, College Street from
              Augusta Avenue to Spadina Avenue will be reduced to only one
              eastbound lane, with no westbound travel. College Street from St.
              George Street to Spadina Avenue will also be fully closed to all
              vehicular traffic. Travel on Spadina Avenue will not be impacted.
            </p>
          </a>
          <a href="#">
            <time>September 9th 2022</time>
            <strong>
              Part of a Major Toronto Street is Now Closed for Construction for
              the Rest of the Year
            </strong>
            <p>
              If you`&apos;`re planning on travelling across College Street anytime
              soon, get ready for a sticky commute. Road closures of varying
              degrees will impact College Street all the way from Bathurst
              Street to Bay Street, for the rest of the year. First,
              between mid-September and mid-November, College Street from
              Augusta Avenue to Spadina Avenue will be reduced to only one
              eastbound lane, with no westbound travel. College Street from St.
              George Street to Spadina Avenue will also be fully closed to all
              vehicular traffic. Travel on Spadina Avenue will not be impacted.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
