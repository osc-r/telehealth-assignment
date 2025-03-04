import { View } from "react-native";
import { styles } from "./welcome.styles";
import { Card, Text } from "react-native-paper";

type WelcomeScreenProps = {};

export const WelcomeScreen = (props: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text variant="headlineLarge" style={styles.text}>
          ยินดีตอนรับ
        </Text>
      </Card>
    </View>
  );
};
