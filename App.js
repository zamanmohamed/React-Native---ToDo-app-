import { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* using FlatList insted of scroll View */}
        {/* මෙය <ScrollView/> එකට loard එක අඩුයි */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

//in react style parent style not support to child (not like CSS)

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
