'use client';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import AIProfilePic from '../../public/cartoon-logo.png';



export default function Header() {

    return (
        <div className={styles.container}>
            {/* <div className={styles.logo}>
                <Image
                    src={AIProfilePic}
                    width={100}
                    height={100}
                    alt="User-Image"
                />
            </div> */}
            <div className={styles.links}>
                <div className={styles.link}><a className={styles.a} href="">Chat</a></div>
                <div className={styles.link}><a className={styles.a} href="">Other Projects</a></div>
                <div className={styles.link}><a className={styles.a} href="">Contact Info</a></div>
            </div>
        </div>
    );
}