import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    /*මෙහිදී සම්පූර්ණ interface එකම එකම  flex (parent flex) එකක් ලෙස   appContainer  flex: 1 හරහා ගනී*/
    /* අනතුරුව inputContainer(child flex) flex: 1  හා goalsContainer(child flex) flex: 5 හරහා*/
    /*inputContainer එක 1/6 ක හා goalsContainer  එක 5/6 ක කොටසක් අත්පත් කර ගනී*/
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    //get 80% width of the parent element
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
