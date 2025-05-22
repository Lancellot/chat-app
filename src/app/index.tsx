import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Header } from "./components/Header";
import { MessageItem } from "./components/MessageItem";
import { TypingIndicator } from "./components/TypingIndicator";
import { ChatInput } from "./components/ChatInput";
import { useChat } from "./hooks/useChat";

const App = () => {
  const {
    message,
    messages,
    isBotTyping,
    isOnline,
    flatListRef,
    typingDots,
    setMessage,
    sendMessage,
  } = useChat();

  return (
    <View style={styles.container}>
      <Header isOnline={isOnline} />

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={({ item }) => <MessageItem message={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />

      {isBotTyping && <TypingIndicator typingDots={typingDots} />}

      <ChatInput
        message={message}
        onChangeText={setMessage}
        onSend={sendMessage}
      />
    </View>
  );
};

export default App;
