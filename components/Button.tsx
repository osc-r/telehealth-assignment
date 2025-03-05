import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.disabled ? "#ECF3FF" : "#3C6CE7",
        },
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text
        style={[
          styles.label,
          {
            color: props.disabled ? "#3C6CE7" : "white",
          },
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 168,
  },
  label: { fontSize: 18, fontWeight: 600 },
});
