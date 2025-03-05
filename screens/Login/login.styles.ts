import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "white",
  },
  logo: { width: 80, height: 104 },
  headerText: { fontSize: 18, fontWeight: 600, marginTop: 48 },
  register: { flexDirection: "row", alignItems: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#CFCFCF",
    height: 56,
    padding: 16,
    borderRadius: 16,
  },
});
