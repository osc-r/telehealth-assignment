import { FlatList, View } from "react-native";
import { Chip } from "react-native-paper";
import { useState } from "react";
import { StyleSheet } from "react-native";

const CHIPS = [
  { id: "1", label: "ทั้งหมด" },
  { id: "2", label: "แพทย์" },
  { id: "3", label: "ทันตแพทย์" },
  { id: "4", label: "เภสัชกร" },
];

export const DoctorCategory = () => {
  const [chip, setChip] = useState("1");

  return (
    <FlatList
      data={CHIPS}
      horizontal
      renderItem={({ item }) => (
        <Chip
          style={[styles.chip, chip === item.id && styles.active]}
          textStyle={{ color: chip === item.id ? "white" : "#3C6CE7" }}
          onPress={() => setChip(item.id)}
        >
          {item.label}
        </Chip>
      )}
      ListHeaderComponent={<View style={{ width: 16 }} />}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
    />
  );
};

const styles = StyleSheet.create({
  active: { backgroundColor: "#3C6CE7", borderRadius: 40 },
  chip: { backgroundColor: "#ECF3FF", borderRadius: 40 },
});
