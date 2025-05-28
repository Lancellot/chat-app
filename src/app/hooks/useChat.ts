import { useState, useRef, useCallback } from 'react';
import { Animated, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // instale com: npm install uuid
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

  const createMessage = useCallback((content: string, isUser: boolean): Message => ({
    id: uuidv4(),
    content,
    isUser,
    time: new Date().toLocaleTimeString(),
    status: 'sent',
  }), []);

  const scrollToEnd = useCallback(() => {
    if (flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100); // pequeno delay para garantir atualização
    }
  }, []);

  const sendMessage = useCallback(() => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMessage = createMessage(trimmed, true);
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsBotTyping(true);

    setTimeout(() => {
      try {
        const botResponse = getBotResponse(trimmed);
        const botMessage = createMessage(botResponse, false);
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage = createMessage('Desculpe, ocorreu um erro ao responder.', false);
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsBotTyping(false);
        scrollToEnd();
      }
    }, 2000);
  }, [message, createMessage, scrollToEnd]);

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
