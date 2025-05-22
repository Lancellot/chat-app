import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
import { Message } from "../types";

type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => (
  <View
    style={[
      styles.messageWrapper,
      message.isUser ? styles.userMessageWrapper : styles.botMessageWrapper,
    ]}
  >
    <View
      style={[
        styles.messageContainer,
        message.isUser
          ? styles.userMessageContainer
          : styles.botMessageContainer,
      ]}
    >
      <Text
        style={[styles.messageText, message.isUser && { color: "#FFFFFF" }]}
      >
        {message.content}
      </Text>
      <View style={styles.messageFooter}>
        <Text
          style={[
            styles.timestamp,
            message.isUser ? styles.userTimestamp : styles.botTimestamp,
          ]}
        >
          {message.time}
        </Text>
        {message.isUser && (
          <Text style={styles.messageStatus}>
            {message.status === "sent" ? "✓" : "✓✓"}
          </Text>
        )}
      </View>
    </View>
  </View>
);
