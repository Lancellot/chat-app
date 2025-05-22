import React from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "../styles";

type TypingIndicatorProps = {
  typingDots: Animated.Value[];
};

export const TypingIndicator = ({ typingDots }: TypingIndicatorProps) => (
  <View style={styles.typingIndicator}>
    <Text style={styles.typingText}>🤖 digitando</Text>
    <View style={styles.typingDots}>
      {typingDots.map((dot, index) => (
        <Animated.View
          key={index}
          style={[
            styles.dot,
            {
              transform: [
                {
                  translateY: dot.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -8],
                  }),
                },
              ],
            },
          ]}
        />
      ))}
    </View>
  </View>
);
