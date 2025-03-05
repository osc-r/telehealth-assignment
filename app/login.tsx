import { LoginScreen } from "@/screens";
import { router } from "expo-router";

export default function Screen() {
  const onLogin = () => router.push("/(authenticated)");
  return <LoginScreen onLogin={onLogin} />;
}
