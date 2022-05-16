import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import SpecialThanks from '../components/SpecialThanks';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/7BNpwKH8JC">
            <Translate>Join our Discord channel</Translate>
          </Link>

        </div>

            <br/>
          <h2>
              <Translate>Follow us on:</Translate><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://www.facebook.com/jukalang/"><FontAwesomeIcon icon={faFacebook}  fixedWidth/>Facebook: @jukalang</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://twitter.com/jukaLang/"><FontAwesomeIcon icon={faTwitter} fixedWidth/>Twitter: @jukaLang</a><br/>
              <a style={{color:"#fff"}} target="_blank" href="https://www.instagram.com/jukalanguage/"><FontAwesomeIcon icon={faInstagram} fixedWidth/>Instagram: @jukalanguage</a>
          </h2>

    <br/><br/>
          <CodeBlock className={`language-jsx ${styles.maincodeblock}`} title="./HelloWorld.juka">{`func main() = {
    // Print Hello World
    printLine("Hello World");
}`}</CodeBlock>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Juka Programming Language - Language of the future">
      <HomepageHeader />
      <main>

        <HomepageFeatures />
          <SpecialThanks />
      </main>
    </Layout>
  );
}
