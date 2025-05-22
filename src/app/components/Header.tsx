import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

type HeaderProps = {
  isOnline: boolean;
};

export const Header = ({ isOnline }: HeaderProps) => (
  <View style={styles.header}>
    <View style={styles.botInfo}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>🤖</Text>
      </View>
      <View>
        <Text style={styles.botName}>Assistente Virtual</Text>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isOnline ? "#4CAF50" : "#999" },
            ]}
          />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      </View>
    </View>
  </View>
);
