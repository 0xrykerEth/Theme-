import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";

const tasks = [
  {
    task: "Morning Walk",
    icon: "hiking",
    theme: "#37003c",
    stamp: "Today . 8pm",
  },
  {
    task: "Meet with HR",
    icon: "account-tie",
    theme: "#008b8b",
    stamp: "Today . 8pm",
  },
  {
    task: "Shopping with family",
    icon: "cart",
    theme: "#fed132",
    stamp: "Today . 8pm",
  },
  {
    task: "Time for Gym",
    icon: "weight",
    theme: "#008b8b",
    stamp: "Today . 8pm",
  },
  {
    task: "Time for lunch",
    icon: "food",
    theme: "#FECD70",
    stamp: "Today . 8pm",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 6,
        padding: 28,
        alignContent: "center",
        justifyContent: "space-between",
        borderRadius: 15,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text>{task}</Text>
          <Text>{stamp}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          style={{ color: theme }}
        />
        <MaterialCommunityIcons
          name="delete"
          size={30}
          style={{ color: theme }}
        />
      </View>
    </View>
  );
};

export default function App(props) {
  return (
    <View style={styles.container}>
      <StatusBar style={{ backgroundColor: "#FFF" }} />
      <View style={{ backgroundColor: "#4161e4" }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: "FFF" }}
          />
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Octicons name="bell" size={28} style={{ color: "FFF" }} />
            <AntDesign name="user" size={28} style={{ color: "FFF" }} />
          </View>
        </View>
        <View>
          <Text style={{ padding: 16, fontSize: 30, color: "#FFF" }}>
            Hello, {"\n"}Benjamin
          </Text>
          <View style={styles.search}>
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: "FFF" }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: "FFF" }}
              />
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: "FFF" }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          backgroundColor: "#FEFCF3",
          justifyContent: "space-between",
          marginTop: 30,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <MaterialCommunityIcons
          name="plus"
          size={30}
          style={{
            color: "#2c48bc",
            backgroundColor: "#FEFCF3",
            borderRadius: 16,
            elevation: 1,
          }}
        />
      </View>
      <ScrollView style={{ backgroundColor: "#FEFCF3" }}>
        {tasks.map((task) => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4161e4",
  },
  search: {
    paddingHorizontal: 16,
    width: "90%",
    marginLeft: "5%",
    paddingVertical: 6,
    backgroundColor: "#2c48bc",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
