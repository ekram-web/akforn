import React, { useState } from 'react';
import styles from './ContactPages.module.css';

const FaqChatPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hello! How can I help you today with AK Vision products?' }
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { sender: 'user', message: chatMessage }]);
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          sender: 'bot', 
          message: 'Thank you for your message. Our support team will review your question and respond shortly.'
        }
      ]);
    }, 1000);

    // Clear input
    setChatMessage('');
  };

  const faqs = [
    {
      question: 'How do I reset my camera to factory settings?',
      answer: 'To reset your AK Vision camera to factory settings, press and hold the reset button (usually located on the back or bottom of the camera) for 10 seconds until the indicator light flashes. Please note that this will erase all custom settings.'
    },
    {
      question: 'What is the default username and password for my NVR?',
      answer: 'The default username for most AK Vision NVRs is "admin" and the default password is "12345". For security reasons, we strongly recommend changing these credentials immediately after your first login.'
    },
    {
      question: 'How do I update the firmware on my device?',
      answer: 'To update firmware: 1) Download the latest firmware from our support website, 2) Access your device\'s web interface, 3) Navigate to System > Maintenance > Upgrade, 4) Select the firmware file you downloaded, and 5) Click "Upgrade" and wait for the process to complete. Do not power off the device during the upgrade.'
    },
    {
      question: 'My camera is not connecting to the network. What should I do?',
      answer: 'If your camera isn\'t connecting: 1) Check physical connections and power, 2) Verify network settings are correct, 3) Ensure your router is working properly, 4) Try resetting the camera, 5) Check if the camera IP conflicts with another device. If problems persist, please contact our technical support team.'
    },
    {
      question: 'How many cameras can I connect to my NVR?',
      answer: 'The number of cameras you can connect depends on your specific NVR model. Our entry-level models support 4-8 cameras, mid-range models support 16 cameras, and professional models can support up to 32 or 64 cameras. Please check your product specifications for the exact number.'
    },
    {
      question: 'What is the warranty period for AK Vision products?',
      answer: 'Most AK Vision products come with a standard 2-year limited warranty. Professional series products may include extended warranty options. The warranty covers manufacturing defects but does not cover damage from improper use or installation. Please register your product on our website to activate your warranty.'
    },
  ];

  return (
    <div className={styles.contactPageContainer}>
      <div className={styles.contactHeader}>
        <h1>FAQ & Live Chat</h1>
        <p>Find answers to common questions or chat with our support team</p>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "faq" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("faq")}
          >
            Frequently Asked Questions
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "chat" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("chat")}
          >
            Live Chat Support
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === "faq" ? (
            <div className={styles.faqContainer}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <div
                    className={styles.faqQuestion}
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3>{faq.question}</h3>
                    <span className={styles.faqToggle}>
                      {activeQuestion === index ? "−" : "+"}
                    </span>
                  </div>
                  {activeQuestion === index && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.chatContainer}>
              <div className={styles.chatHistory}>
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`${styles.chatMessage} ${
                      chat.sender === "user"
                        ? styles.userMessage
                        : styles.botMessage
                    }`}
                  >
                    <div className={styles.messageContent}>{chat.message}</div>
                  </div>
                ))}
              </div>
              <form className={styles.chatForm} onSubmit={handleChatSubmit}>
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className={styles.chatInput}
                />
                <button type="submit" className={styles.chatSendButton}>
                  Send
                </button>
              </form>
              <p className={styles.chatNote}>
                Our support agents are available Monday-Friday, 9am-6pm EST.
                Outside these hours, please leave a message and we'll respond on
                the next business day.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.contactInfo}>
        <h3>Still Need Help?</h3>
        <p>
          If you can't find the answer you're looking for, please contact us
          through one of our other support channels:
        </p>
        <div className={styles.supportLinks}>
          <a href="/contact/technical" className={styles.supportLink}>
            Technical Support
          </a>
          <a href="/contact/sales" className={styles.supportLink}>
            Sales Support
          </a>
          <a href="tel:0950353535/0950363636" className={styles.supportLink}>
            Call Us: 0950353535/0950363636
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqChatPage;