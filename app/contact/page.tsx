'use client';
import Header from '../components/header';
import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.container}>
                {/* <h1 className={styles.h1}>Get in touch with me!</h1> */}
                <a className={styles.link} target='_blank' href='https://www.linkedin.com/in/henry-jamison/'>
                    LinkedIn
                </a>
                <a className={styles.link}
                    href="/HenryJamison_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        Updated Resume
                </a>
                <p className={styles.p}>Henry.jamison4 at gmail.com</p>
            </div>
        </main>
    );
}