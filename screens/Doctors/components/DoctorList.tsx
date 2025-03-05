import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Chip, Surface, Text } from "react-native-paper";

const DOCTORS = [
  {
    title: "รศ.ภญ. สุณี  เลิศสินอุดม",
    rating: 5,
    category: "แพทย์ (โรคทั่วไป)",
    location: "โรงพยาบาลขอนแก่น",
    serviceFee: "ฟรี",
    picture: require("@/assets/images/doctor.png"),
  },
  {
    title: "รศ.ภญ. สุณี  เลิศสินอุดม",
    rating: 5,
    category: "แพทย์ (โรคทั่วไป)",
    location: "โรงพยาบาลขอนแก่น",
    serviceFee: "ฟรี",
    picture: require("@/assets/images/doctor.png"),
  },
  {
    title: "รศ.ภญ. สุณี  เลิศสินอุดม",
    rating: 5,
    category: "แพทย์ (โรคทั่วไป)",
    location: "โรงพยาบาลขอนแก่น",
    serviceFee: "ฟรี",
    picture: require("@/assets/images/doctor.png"),
  },
];

const BADGES = [
  require("@/assets/images/badge-1.png"),
  require("@/assets/images/badge-2.png"),
  require("@/assets/images/badge-3.png"),
  require("@/assets/images/badge-4.png"),
  require("@/assets/images/badge-5.png"),
];

export const DoctorList = () => {
  return (
    <FlatList
      data={DOCTORS}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Surface style={styles.card}>
            <Image source={item.picture} style={styles.image} />
            <View style={styles.detailsContainer}>
              <View style={styles.whiteBar} />
              <Text variant="titleSmall" style={{ fontWeight: 600 }}>
                {item.title}
              </Text>
              <View style={styles.section}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/star-icon.png")}
                    style={{ width: 12, height: 12, marginRight: 4 }}
                  />
                  <Text
                    variant="titleSmall"
                    style={{ fontWeight: 400, color: "#767676" }}
                  >
                    {item.rating.toFixed(2)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("@/assets/images/person-icon.png")}
                    style={{
                      width: 14,
                      height: 14,
                      marginRight: 4,
                      marginLeft: 8,
                    }}
                  />
                  <Text
                    variant="titleSmall"
                    style={{ fontWeight: 400, color: "#767676" }}
                  >
                    {item.category}
                  </Text>
                </View>
              </View>
              <View style={styles.section}>
                <Image
                  source={require("@/assets/images/pin-icon.png")}
                  style={{
                    width: 14,
                    height: 14,
                    marginRight: 4,
                    objectFit: "contain",
                  }}
                />
                <Text
                  variant="titleSmall"
                  style={{ fontWeight: 400, color: "#767676" }}
                >
                  {item.location}
                </Text>
              </View>
              <View style={styles.section}>
                {BADGES.map((i, index) => (
                  <Image key={index} source={i} style={styles.badge} />
                ))}
                <View style={styles.customBadge}>
                  <Text variant="labelMedium">3+</Text>
                </View>
              </View>
              <View
                style={[
                  styles.section,
                  {
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text variant="titleSmall" style={{ fontWeight: 600 }}>
                  ค่าบริการเริ่มต้น
                </Text>
                <Text
                  variant="titleSmall"
                  style={{ fontWeight: 600, color: "#3C6CE7" }}
                >
                  {item.serviceFee}
                </Text>
              </View>
            </View>
          </Surface>
        </TouchableOpacity>
      )}
      style={{ padding: 16, backgroundColor: "#ECF3FF80" }}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: { width: 124, height: 164 },
  detailsContainer: {
    flex: 1,
    position: "relative",
    padding: 16,
    paddingLeft: 0,
    backgroundColor: "white",
  },
  whiteBar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: -16,
    width: 16,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "white",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  badge: {
    width: 20,
    height: 20,
    marginRight: 4,
    objectFit: "contain",
  },
  customBadge: {
    height: 20,
    padding: 0,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#EDEDED",
  },
});
