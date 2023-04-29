import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

// user definition
import styles from "./App.components.style";
import Task from "./components/Task";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert("Pay attention", `Are you sure to delete ${taskList[index]}`, [
      {
        text: "OK",
        onPress: () => {
          let taskListtmp = [...taskList];
          taskListtmp.splice(index, 1);
          setTaskList(taskListtmp);
        },
      },
      { text: "cancel", onPress: () => {} },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Form onAddTask={handleAddTask} />
      </View>
    </View>
  );
}
