import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sem City Collective</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
