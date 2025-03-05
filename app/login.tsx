import { LoginScreen } from "@/screens";
import { useUserStore } from "@/stores/user.store";
import { router } from "expo-router";

export default function Screen() {
  const { login } = useUserStore();
  const onLogin = () => {
    login();
    router.push("/(authenticated)");
  };
  return <LoginScreen onLogin={onLogin} />;
}
