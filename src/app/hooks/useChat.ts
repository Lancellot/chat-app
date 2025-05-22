import { useState, useRef } from 'react';
import { Animated, FlatList } from 'react-native';
import { Message } from '../types';
import { getBotResponse } from '../chatResponses';

export const useChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isOnline] = useState(true);
  const flatListRef = useRef<FlatList>(null);
  const typingDots = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  const createMessage = (content: string, isUser: boolean): Message => ({
    id: Date.now().toString(),
    content,
    isUser,
    time: new Date().toLocaleTimeString(),
    status: 'sent',
  });

  const sendMessage = () => {
    if (message.trim()) {
      const userMessage = createMessage(message, true);
      setMessages(prev => [...prev, userMessage]);
      setMessage('');

      setIsBotTyping(true);
      setTimeout(() => {
        setIsBotTyping(false);
        const botResponse = getBotResponse(message);
        const botMessage = createMessage(botResponse, false);
        setMessages(prev => [...prev, botMessage]);
        if (flatListRef.current) {
          flatListRef.current.scrollToEnd({ animated: true });
        }
      }, 2000);
    }
  };

  return {
    message,
    messages,
    isBotTyping,
    isOnline,
    flatListRef,
    typingDots,
    setMessage,
    sendMessage,
  };
}; 