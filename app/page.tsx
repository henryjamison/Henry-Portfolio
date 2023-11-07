'use client';

import { useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import styles from './page.module.css';
import Image from 'next/image';
import AIProfilePic from '../public/cartoon-logo.png';
import UserProfilePic from '../public/user.png'
import sendDarkIcon from '../public/send-icon.png'
import sendWhiteIcon from '../public/send-icon-white.png'



export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  
  function formatContent(content:string) {
    return content.replace(/```(.*?)```/gs, '<div><code>$1</code></div>');
  }


useEffect(() => {
  if (messagesContainerRef.current) {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }
}, [messages]);

  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <div className={styles.conversation} ref={messagesContainerRef}>
        {messages.map(m => (
          console.log(m.role == 'assistant' ? m.content : ''),
          <div key={m.id} className={`${styles.message} ${m.role === 'user' ? styles.user : styles.bot}`}>
            {m.role === 'user' ? (
              <div className={styles.user}>
                <Image
                  src={UserProfilePic}
                  width={50}
                  height={50}
                  alt="User-Image"
                  className={styles.profilePic}
                />
                <span>{m.content}</span>
              </div>
            ) : (
              <div className={styles.bot}>
                <Image
                  src={AIProfilePic}
                  width={50}
                  height={50}
                  alt="AI-Icon"
                  className={styles.profilePic}
                />
                <span>{formatContent(m.content)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <form className={styles.inputText} onSubmit={handleSubmit}>
          <input
            value={input}
            className={styles.input}
            onChange={handleInputChange}
            placeholder="Say something..."
          />
          <button className={input === "" ? styles.noInput : styles.subBtn} type="submit">
            <Image
              src={input === "" ? sendDarkIcon : sendWhiteIcon}
              width={25}
              height={25}
              alt="AI-Icon"
              className={styles.subIcon}
            />
          </button>
        </form>
      </div>
    </main >
  );
}