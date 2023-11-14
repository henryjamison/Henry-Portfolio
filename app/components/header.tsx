'use client';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import AIProfilePic from '../../public/cartoon-logo.png';
import Link from 'next/link';



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
                <div className={styles.link}>
                    {/* <a className={styles.a} href="">Chat</a> */}
                    <Link href='/' className={styles.a}> Chat</Link>
                </div>
                <div className={styles.link}>
                    {/* <a className={styles.a} href="">Other Projects</a> */}
                    <Link href='other-projects' className={styles.a}> Other Projects</Link>
                </div>
                <div className={styles.link}>
                    {/* <a className={styles.a} href="">Contact Info</a> */}
                    <Link href='contact' className={styles.a}> Contact Info</Link>
                </div>
            </div>
        </div>
    );
}