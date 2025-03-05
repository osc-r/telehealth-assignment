import { useUserStore } from "@/stores/user.store";
import { Redirect, Stack } from "expo-router";

export default function Authenticated() {
  const { isLogin } = useUserStore();
  if (!isLogin) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="doctors" options={{ headerShown: false }} />
    </Stack>
  );
}
