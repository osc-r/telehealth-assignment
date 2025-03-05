import { useState } from "react";
import { Image, KeyboardAvoidingView, View } from "react-native";
import { styles } from "./login.styles";
import { Text } from "react-native-paper";
import { Button } from "@/components/Button";
import MaskInput from "react-native-mask-input";

type LoginScreenProps = {
  onLogin: () => void;
};

export const LoginScreen = (props: LoginScreenProps) => {
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        source={require("@/assets/images/telehealth-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.headerText}>เข้าสู่ระบบเพื่อใช้งาน</Text>
      <View style={{ width: "100%", marginTop: 16 }}>
        <Text variant="bodyLarge" style={{ color: "#464646", marginBottom: 8 }}>
          เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง*
        </Text>
        <MaskInput
          value={text}
          onChangeText={(_m, _um) => setText(_m)}
          placeholder="เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง"
          style={styles.input}
          mask={[
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            "-",
            /\d/,
          ]}
        />
      </View>
      <Button
        label="เข้าสู่ระบบ"
        onPress={props.onLogin}
        disabled={text.length < 13 + 4}
      />
      <View style={styles.register}>
        <Text variant="bodyLarge">ยังไม่มีบัญชี ? </Text>
        <Text style={{ fontSize: 18, color: "#3C6CE7" }}>ลงทะเบียน</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
