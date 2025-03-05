import { WelcomeScreen } from "@/screens";
import { router } from "expo-router";

export default function Screen() {
  const onPressWelcome = () => {
    router.canDismiss() && router.dismissAll();
    router.push("/doctors");
  };

  return <WelcomeScreen onPressWelcome={onPressWelcome} />;
}
