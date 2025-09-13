import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import facebookLight from '../../assets/facebook-light.svg';
import facebookDark from '../../assets/facebook-dark.svg';
import CV from '../../assets/CV-2024.pdf';
import { useTheme } from '../../common/Themecontext';

const Hero: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'Light' ? sun : moon;
    const twitterIcon = theme === 'Light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'Light' ? githubLight : githubDark;
    const instagramIcon = theme === 'Light' ? instagramLight : instagramDark;
    const linkedinIcon = theme === 'Light' ? linkedinLight : linkedinDark;
    const facebookIcon = theme === 'Light' ? facebookLight : facebookDark;

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile picture of Bogdan Banu"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Bogdan
                    <br />
                    Banu
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com" target='_blank' rel="noreferrer">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com" target='_blank' rel="noreferrer">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://instagram.com" target='_blank' rel="noreferrer">
                        <img src={instagramIcon} alt="Instagram icon" />
                    </a>
                    <a href="https://linkedin.com" target='_blank' rel="noreferrer">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://facebook.com" target='_blank' rel="noreferrer">
                        <img src={facebookIcon} alt="Facebook icon" />
                    </a>
                </span>
                <p className={styles.description}>Computing student at Arden University
Building modern web apps with JavaScript, TypeScript, React, and Node.js
Focused on creating clean, user-friendly digital experiences</p>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;

