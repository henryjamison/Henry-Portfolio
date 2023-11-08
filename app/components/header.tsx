'use client';
import styles from '../styles/header.module.css';



export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                logo maybe?
            </div>
            <div className={styles.links}>
                <div className={styles.link}><a href="">Chat</a></div>
                <div className={styles.link}><a href="">Other Projects</a></div>
                <div className={styles.link}><a href="">Contact Info</a></div>
            </div>
        </div>
    );
}