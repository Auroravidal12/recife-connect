import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="local" options={{ title: "Localização" }} />
      <Tabs.Screen name="historico" options={{ title: "Histórico" }} />
    </Tabs>
  );
}