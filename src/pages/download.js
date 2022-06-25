import React, {useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./download.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faFileCode, faCode} from '@fortawesome/free-solid-svg-icons'
import { faWindows, faApple, faLinux, faFreebsd, faRaspberryPi} from '@fortawesome/free-brands-svg-icons'


function DownloadHeader() {

    const setV = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/jukaLang/juka/tags');
            const result = await response.json();
            setVersion(result[0].name);
        } catch (err) {
            console.log("cannot access Github" + err);
        }
    }

    const [version, setVersion] = useState("0.0.54");
    setV();

    function BigDownloadList() {
        return (
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {OSList.map((props, idx) => (
                            <OSTag key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    const OSList = [
        {
            title: "Windows",
            faIcon: {faWindows}.faWindows,
            description: (
                <>
                    Juka (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Windows_"+version+".zip"} >Download version {version}</a><br/>
                    Juka API (x64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Windows_"+version+".zip"} >Download version {version}</a><br/><br/>

                    Juka (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_WindowsARM64_"+version+".zip"} >Download version {version}</a><br/>
                    Juka API (ARM64): <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_WindowsARM64_"+version+".zip"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "MacOS",
            faIcon: {faApple}.faApple,
            description: (
                <>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_MacOS_"+version+".zip"} >Download version {version}</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_MacOS_"+version+".zip"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "Linux",
            faIcon: {faLinux}.faLinux,
            description: (
                <>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Linux_"+version+".zip"} >Download version {version}</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_Linux_"+version+".zip"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "Microsoft Azure Server",
            faIcon: {faServer}.faServer,
            description: (
                <>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Azure_Function_"+version+".zip"}>Download version {version}</a><br/>
                </>
            ),
        },
        {
            title: "FreeBSD",
            faIcon: {faFreebsd}.faFreebsd,
            description: (
                <>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_FreeBSD_"+version+".tar.gz"} >Download version {version}</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_FreeBSD_"+version+".tar.gz"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "Raspberry Pi",
            faIcon: {faRaspberryPi}.faRaspberryPi,
            description: (
                <>
                    Juka: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_LinuxARM_RaspberryPI_"+version+".zip"} >Download version {version}</a><br/>
                    Juka API: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/JukaAPI_LinuxARM_RaspberryPI_"+version+".zip"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "C# DLL",
            faIcon: {faFileCode}.faFileCode,
            description: (
                <>
                    .dll: <a href={"https://github.com/jukaLang/Juka/releases/download/"+version+"/Juka_Compiler_dll_"+version+".zip"} >Download version {version}</a>
                </>
            ),
        },
        {
            title: "Build From Source",
            faIcon: {faCode}.faCode,
            description: (
                <>
                    Current Version Source: <a href={"https://github.com/jukaLang/Juka/archive/refs/tags/"+version+".zip"}>Download version {version}</a><br/>
                    Other Sources: <a href={"https://github.com/jukaLang/Juka"} target={"_blank"}>Build from other versions</a>
                </>
            ),
        },
    ];

    function OSTag({title, faIcon, description}) {
        return (
            <div className={clsx('col col--4')}>
                <div className="text--center padding-horiz--md">

                    <FontAwesomeIcon icon={faIcon} className={styles.fontawe} />
                    <br/><br/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    const userOS = navigator.userAgent;
    let userOSEntry = {};
    if (userOS.indexOf('Win') !== -1) {  userOSEntry = OSList[0]; }
    else if (userOS.indexOf('Mac') !== -1) {  userOSEntry = OSList[1]; }
    else if (userOS.indexOf('Linux') !== -1) { userOSEntry = OSList[2]; }
    else if (userOS.indexOf('X11') !== -1) {  userOSEntry = OSList[4]; }
    console.log(navigator.userAgent);
    console.log(userOSEntry);

    return (
        <header>
            <div className={styles.learn}>

                <div className={styles.nightly}>

                    Get the latest nightly builds at:
                    <div><a href="https://github.com/jukaLang/Juka/releases" target={"_blank"}>https://github.com/jukaLang/Juka/releases</a></div>

                    <div>Want to try Juka without downloading anything?</div>
                    <a href={"/tryonline"}>Click here to try Juka Online</a>

                </div>
                { (Object.keys(userOSEntry).length !== 0) ?
                    (<> <br/><br/> <h3>It seems that you are using {userOSEntry.title}: </h3>
                        <section className={styles.features}>
                            <div className="container">
                                <div className="row">
                                    <div className={clsx('col col--4')} />
                                    <OSTag {...userOSEntry} />
                                </div>
                            </div>
                        </section>
                    </> ) : (<></>) }
                <br/><br/>
                <h2> List of all available Downloads:</h2>
                <BigDownloadList/>
            </div>
        </header>
    )
}

export default function Home() {

    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Download | ${siteConfig.title}`}
            description="Download Juka Programming Language">
            <h1 className={styles.Header}>Download Latest Version of Juka Programming Language</h1>
            <main>
                <DownloadHeader />
            </main>
        </Layout>
    );
}
