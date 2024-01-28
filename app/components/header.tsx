'use client';
import styles from '../styles/header.module.css';
import Link from 'next/link';



export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <div className={styles.link}>
                    <Link href='/' className={styles.a}> Chat</Link>
                </div>
                <div className={styles.link}>
                    <Link href='other-projects' className={styles.a}> Other Projects</Link>
                </div>
                <div className={styles.link}>
                    <Link href='contact' className={styles.a}> Contact Info</Link>
                </div>
            </div>
        </div>
    );
}