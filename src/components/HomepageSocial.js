import React from 'react';
import clsx from 'clsx';
import styles from './HomepageSocial.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faDiscord,faYoutube} from '@fortawesome/free-brands-svg-icons'


const SocialList = [
    {
        faIcon: {faFacebook}.faFacebook,
        url: "https://www.facebook.com/jukalang/"
    },
    {
        faIcon: {faInstagram}.faInstagram,
        url: "https://www.instagram.com/jukalanguage/"
    },
    {
        faIcon: {faTwitter}.faTwitter,
        url: "https://twitter.com/jukaLang/"
    },
    {
        faIcon: {faYoutube}.faYoutube,
        url: "https://www.youtube.com/channel/UCRkKqD0fnuVAJLJe9p4ZiKQ"
    },
    {
        faIcon: {faDiscord}.faDiscord,
        url: "https://discord.com/invite/7BNpwKH8JC/"
    },
];



function SocialF({faIcon, url}) {
    return (
        <a href={url} target="_blank"><FontAwesomeIcon icon={faIcon} className={styles.fontaweic}  /></a>
    );
}

export default function HomepageSocial() {
    return (

            <div className="container">
                <div className="row">
                    <div className={clsx('col col--6 col--offset-3')}>

                                <section className={styles.fontawef}>
                                    {SocialList.map((props, idx) => (
                                        <SocialF key={idx} {...props} />
                                    ))}
                                </section>

                    </div>
                </div>
            </div>

    );
}