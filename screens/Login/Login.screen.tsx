import { useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./login.styles";
import { Button, Text, TextInput } from "react-native-paper";

type LoginScreenProps = {};

export const LoginScreen = (props: LoginScreenProps) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/telehealth-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>เข้าสู่ระบบเพื่อใช้งาน</Text>
      <TextInput
        label="เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button>เข้าสู่ระบบ</Button>
      <View style={styles.register}>
        <Text>ยังไม่มีบัญชี ? </Text>
        <Button>ลงทะเบียน</Button>
      </View>
    </View>
  );
};
