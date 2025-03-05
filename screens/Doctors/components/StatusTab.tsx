import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useState } from "react";

const STATUS = [
  { id: "1", label: "พร้อมให้บริการ" },
  { id: "2", label: "ออฟไลน์" },
];

export const StatusTab = () => {
  const [status, setStatus] = useState("1");

  return (
    <FlatList
      data={STATUS}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setStatus(item.id)}
          style={[
            styles.container,
            {
              borderBottomColor: status === item.id ? "#3C6CE7" : "transparent",
            },
          ]}
        >
          <Text
            style={{
              color: status === item.id ? "#3C6CE7" : "#A4A4A4",
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
});
