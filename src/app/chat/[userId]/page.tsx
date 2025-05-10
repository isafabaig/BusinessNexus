'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Message {
  sender: string;
  text: string;
  timestamp: string;
}

export default function ChatPage() {
  const params = useParams() as Record<string, string>;
  const userId = params?.userId;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchChat = async () => {
      const res = await fetch('/data/chats.json');
      const chats = await res.json();

      const chat = chats.find((c: any) =>
        c.investorId === userId || c.entrepreneurId === userId
      );

      if (chat) setMessages(chat.messages);
    };

    fetchChat();
  }, [userId]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      sender: 'You',
      text: input,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with User {userId}</h2>
      <div className="border p-4 h-96 overflow-y-auto flex flex-col gap-3 mb-4 bg-white rounded shadow">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] p-2 rounded-lg text-sm ${
              msg.sender === 'You' ? 'ml-auto bg-blue-100' : 'bg-gray-100'
            }`}
          >
            <p className="font-semibold">{msg.sender}</p>
            <p>{msg.text}</p>
            <p className="text-xs text-right text-gray-400">{new Date(msg.timestamp).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
