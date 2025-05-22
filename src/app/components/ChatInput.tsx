import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

type ChatInputProps = {
  message: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
};

export const ChatInput = ({
  message,
  onChangeText,
  onSend,
}: ChatInputProps) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      value={message}
      onChangeText={onChangeText}
      placeholder="Digite sua mensagem..."
      placeholderTextColor="#999"
      multiline
    />
    <TouchableOpacity
      style={[styles.sendButton, !message && styles.sendButtonDisabled]}
      onPress={onSend}
      disabled={!message}
    >
      <Text style={styles.sendButtonText}>➤</Text>
    </TouchableOpacity>
  </View>
);
