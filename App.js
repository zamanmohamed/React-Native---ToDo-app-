import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>HI Mohamed Zaman</Text>
      <Text style={styles.dummyText}>Hello</Text>
      <Button title="Tap me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: { padding: 20, borderColor: "red", borderWidth: 2, margin: 16 },
});
