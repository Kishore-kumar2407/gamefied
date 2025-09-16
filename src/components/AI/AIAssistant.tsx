import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Lightbulb, Code, HelpCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const quickActions = [
  { icon: Code, text: 'Explain this code', action: 'explain-code' },
  { icon: Lightbulb, text: 'Give me a hint', action: 'hint' },
  { icon: HelpCircle, text: 'How to solve this?', action: 'solution' }
];

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI coding assistant. I can help you with coding problems, explain concepts, provide hints, and answer any programming questions you have. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: text,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(text),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string) => {
    const responses = [
      "I can help you with that! Let me break down the problem for you. The key concept here is to think about the data structure that would be most efficient for this operation.",
      "Great question! This is a common pattern in programming. Here's a step-by-step approach you can follow...",
      "I see what you're working on. One hint: consider using a two-pointer technique for this type of array problem.",
      "That's an interesting challenge! Let me suggest a different approach that might be more efficient...",
      "Good thinking! You're on the right track. Here are some optimization tips that could help improve your solution."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickAction = (action: string) => {
    const actionMessages = {
      'explain-code': "Can you explain how this code works?",
      'hint': "I'm stuck on this problem. Can you give me a hint?",
      'solution': "How should I approach solving this problem?"
    };
    sendMessage(actionMessages[action as keyof typeof actionMessages]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="flex flex-col items-center space-y-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 text-center">{action.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};