import { View } from "react-native";
import { styles } from "./doctors.styles";
import { DoctorCategory } from "./components/DoctorCategory";
import { StatusTab } from "./components/StatusTab";
import { DoctorList } from "./components/DoctorList";
import { Header } from "@/components/Header";

type DoctorsScreenProps = {};

export const DoctorsScreen = (props: DoctorsScreenProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ECF3FF" }}>
      <Header title="ความดัน" />
      <View style={styles.container}>
        <View style={styles.chipContainer}>
          <DoctorCategory />
        </View>
        <View style={styles.tabContainer}>
          <StatusTab />
        </View>
        <DoctorList />
      </View>
    </View>
  );
};
