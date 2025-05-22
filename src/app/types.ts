import { Animated } from "react-native";

export type Message = {
  id: string;
  content: string;
  isUser: boolean;
  time: string;
  status: 'sent' | 'delivered';
  fadeAnim?: Animated.Value;
};
