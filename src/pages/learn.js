import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./learn.module.css";
import clsx from "clsx";

function LearnHeader() {
    return (
        <header>
            <div className={styles.learn}>

                <a href="/quiz">Think you know Juka? Take a Quiz!</a><br/><br/>
                <a href="https://ide.jukalang.com">Click here to use Juka's Web IDE</a><br/><br/>


                {/*<h2>Videos</h2>*/}
                <div className="container">
                    <div className="row">
                        <div className={clsx('col col--6')}>
                            {/*<h4>Updating JLDN</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZkUnytJUwy4"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>*/}


                        </div>
                        <div className={clsx('col col--6')}>
                            {/*<h4>Installing Juka using JLDN (Juka Language Decentralized Network)</h4>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/qRNXLm6JIuY"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>*/}

                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Learn | ${siteConfig.title}`}
            description="Juka Programming Language Learning Center">
            <h1 className={styles.Header}>Juka Programming Language Learning Center</h1>
            <main>
                <LearnHeader />
            </main>
        </Layout>
    );
}
