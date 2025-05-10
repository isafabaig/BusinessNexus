import React, { useState } from 'react';

const ChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'Investor', text: 'Hi there!' },
    { sender: 'Entrepreneur', text: 'Hello, how can I help you?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'You', text: input }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white text-black w-full max-w-md rounded shadow-lg p-4 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-700">✕</button>
        <h2 className="text-lg font-bold mb-4">Live Chat</h2>
        <div className="h-64 overflow-y-auto border rounded p-2 mb-4 bg-gray-100">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 ${
                msg.sender === 'You' ? 'text-right' : 'text-left'
              }`}
            >
              <div className="inline-block bg-blue-200 px-3 py-1 rounded-lg">
                <span className="text-sm">{msg.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow border rounded px-2 py-1"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-700 text-white px-4 py-1 rounded hover:cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
