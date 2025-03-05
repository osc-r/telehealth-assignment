import { Stack } from "expo-router";

export default function Authenticated() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="doctors" options={{ headerShown: false }} />
    </Stack>
  );
}
