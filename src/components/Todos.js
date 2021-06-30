import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

// var todoData = [];

export default function Todos() {
  const [todoData, setTodoData] = useState([]);
  const [newtodo, setNewTodo] = useState();

  const submitForm = () => {
    if (newtodo) {
      setTodoData([...todoData, newtodo]);
    }
    setNewTodo(null);
  };

  const todoDelete = (todoId) => {
    let result = todoData.filter((todo) => {
      return todo.id != todoId;
    });
    setTodoData(result);
    // return todoData;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Todo App</Text>
      <Text style={styles.heading2}>Add Todo</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          marginTop: 30,
        }}
      >
        <TextInput
          style={styles.todoInput}
          placeholderTextColor="#fefefe"
          placeholder="Enter todo here"
          onChangeText={(text) => {
            let answer = {
              id: Math.floor(Math.random() * 100000000),
              todo: text,
            };
            setNewTodo(answer);
            console.log(answer.id);
          }}
        />
        <TouchableOpacity onPress={submitForm} style={styles.button}>
          <Ionicons name="add-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading2}>All Todos</Text>
        <FlatList
          data={todoData}
          renderItem={(data) => {
            const val = data.item;
            var index = 0;
            index++;
            return (
              <View style={styles.todoCard} key={index}>
                <Text style={{ width: "80%", color: "white" }}>{val.todo}</Text>
                <View style={styles.menuStyles}>
                  <Menu>
                    <MenuTrigger>
                      <SimpleLineIcons name="options" size={25} color="white" />
                    </MenuTrigger>

                    <MenuOptions customStyles={optionStyles}>
                      <MenuOption>
                        <Text>Edit</Text>
                      </MenuOption>
                      <MenuOption
                        onSelect={() => {
                          todoDelete(val.id);
                        }}
                      >
                        <Text>Delete</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  heading1: {
    fontSize: 35,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 0,
  },
  heading2: {
    fontSize: 25,
    color: "white",
    marginTop: 40,
  },
  todoInput: {
    height: 50,
    width: "80%",
    backgroundColor: "#323232",
    paddingLeft: 20,
    paddingRight: 20,
    color: "white",
  },
  button: {
    backgroundColor: "yellow",
    width: "20%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  todoCard: {
    backgroundColor: "#323232",
    width: "100%",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  menuStyles: {
    width: "20%",
    // height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const optionStyles = {
  optionsContainer: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 30,
  },
};
