import React, { useState } from 'react';
import styles from './ChatWidget.module.css';
import chatIcon from '../assets/icons/chat.webp'; 
import chatData from '../utils/mockChatdata.js';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(chatData); 
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  return (
    <div className={styles.chatWidget}>
      <img
        src={chatIcon}
        alt="Chat Icon"
        className={styles.chatIcon}
        onClick={toggleChat}
      />

      {isOpen && (
        <div className={styles.chatBox}>
          <div className={styles.chatHeader}>
            <span>SoftSell Chat</span>
            <button onClick={toggleChat}>&times;</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.fromUser ? styles.userMsg : styles.botMsg}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
