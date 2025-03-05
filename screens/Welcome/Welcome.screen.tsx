import { Pressable, View } from "react-native";
import { styles } from "./welcome.styles";
import { Surface, Text } from "react-native-paper";

type WelcomeScreenProps = {
  onPressWelcome: () => void;
};

export const WelcomeScreen = (props: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Surface style={styles.card}>
        <Pressable onPress={props.onPressWelcome}>
          <Text variant="headlineLarge" style={styles.text}>
            ยินดีตอนรับ
          </Text>
        </Pressable>
      </Surface>
    </View>
  );
};
