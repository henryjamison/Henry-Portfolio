'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat } from 'ai/react';
import Textarea from "react-textarea-autosize";
import styles from './styles/page.module.css';
import Image from 'next/image';
import AIProfilePic from '../public/cartoon-logo.png';
import UserProfilePic from '../public/user.png'
import sendDarkIcon from '../public/send-arrow-gray.png'
import sendWhiteIcon from '../public/send-arrow-white.png'
import Header from './components/header';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, setInput, isLoading } = useChat();
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);


  function formatContent(content: string) {
    // return content.replace(/```(.*?)```/gs, '<div><code>$1</code></div>');
    return content.replace(/```(.*?)```/gs, '<div><code>$1</code></div>');
  }
  const examples = [
    "Where are you from?",
    "Tell me about your previous work experience.",
    "Do you have any coding experience?",
    "Tell me about yourself.",
    "What do you like to do for fun?",
    "Where do you go to school?"
  ]

  // function addMessageToHistory(message:any) {
  //   // Load the existing conversation history from localStorage
  //   const conversationHistory = JSON.parse(localStorage.getItem('conversationHistory')!) || [];

  //   // Add the new message to the conversation history
  //   console.log(message);
  //   // conversationHistory.push(message);

  //   // Save the updated conversation history to localStorage
  //   localStorage.setItem('conversationHistory', JSON.stringify(conversationHistory));
  // }

  // function loadConversationHistory() {
  //   // Retrieve the conversation history from localStorage
  //   const conversationHistory = JSON.parse(localStorage.getItem('conversationHistory')!) || [];

  //   // console.log("Convo History" + conversationHistory);
  // }

  // // Call the function to load the conversation history when the page loads
  // // loadConversationHistory();

  const handleFormSubmit = (e: any) => {
    handleSubmit(e);

    // Set formSubmitted to true
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <main className={styles.main}>
      <Header />
      <div className={formSubmitted ? styles.outerStartHidden : styles.outerStart}>
        <div className={styles.innerStart}>
          <div className={styles.upperAbout}>
            <Image
              src={AIProfilePic}
              width={100}
              height={100}
              alt="User-Image"
              className={styles.examplePic}
            />
            <h3 className={styles.exampleHeaderText}>Hi, I'm Henry!</h3>
            <p>I'm an AI bot fine-tuned on the life of Henry Jamison</p>
            <p>Feel free to ask me anything, or select a prompt below to get to know me!</p>
          </div>
          <div className={styles.exampleBtnContainer}>
            {examples.map((example, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(example);
                  inputRef.current?.focus();
                }}
                className={styles.exampleBtn}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.conversation} ref={messagesContainerRef}>
        {messages.map(m => (
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
                <span className={styles.messageContent}>{m.content}</span>
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
                <span className={styles.messageContent}>{formatContent(m.content)}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <form className={styles.inputForm}
          ref={formRef} onSubmit={handleFormSubmit}>
          <Textarea
            ref={inputRef}
            tabIndex={0}
            required
            rows={1}
            // autoFocus
            placeholder="Send a message"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                formRef.current?.requestSubmit();
                e.preventDefault();
              }
            }}
            spellCheck={false}
            className={styles.inputTextArea}
          />
          <button className={input === "" ? styles.noInputBtn : styles.subBtn} type="submit">
            <Image
              src={input === "" ? sendDarkIcon : sendWhiteIcon}
              width={35}
              height={35}
              alt="AI-Icon"
              className={styles.subIcon}
            />
          </button>
        </form>
      </div>
    </main >
  );
}



// could potentially use setMessages from useChat to set messages[] as local storage message? 
// when isLoading, display a stop generating button that calls stop?