import React, { useState } from 'react';
import axios from 'axios';

function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setUserInput('');
    setBotResponse('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-002',
          prompt: userInput,
          max_tokens: 50,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `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`,
          },
        }
      );
      setBotResponse(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <button onClick={openModal}>Open Chat</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Chat with ChatGPT</h2>
            <div className="chat-container">
              {botResponse && (
                <div className="chat-message bot">{botResponse}</div>
              )}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask me anything..."
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatModal;
