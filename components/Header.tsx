import { router } from "expo-router";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text, Icon } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = { title: string };

export const Header = (props: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Icon source="chevron-left" size={32} color="#464646" />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text
          variant="titleMedium"
          style={{ color: "#464646", fontWeight: 600 }}
        >
          {props.title}
        </Text>
      </View>
      <TouchableOpacity>
        <Icon source="magnify" size={28} color="#464646" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
    paddingBottom: 20,
    paddingHorizontal: 32,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "white",
    alignItems: "center",
  },
});
