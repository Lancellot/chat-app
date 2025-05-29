import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { Message } from "../types";

type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  const isUser = message.isUser;

  return (
    <View
      style={[
        styles.messageWrapper,
        isUser ? styles.userMessageWrapper : styles.botMessageWrapper,
      ]}
    >
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessageContainer : styles.botMessageContainer,
        ]}
      >
        <Text style={[styles.messageText, isUser && { color: "#FFFFFF" }]}>
          {message.content}
        </Text>

        <View style={styles.messageFooter}>
          <Text
            style={[
              styles.timestamp,
              isUser ? styles.userTimestamp : styles.botTimestamp,
            ]}
          >
            {message.time}
          </Text>

          {isUser && (
            <Text style={styles.messageStatus}>
              {message.status === "sent" ? "✓" : "✓✓"}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
