import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { switchPage } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

function Switch(props) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.flights.page);
  const onPress = (name) => {
    dispatch(switchPage(name));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.children}</Text>
      <View style={styles.switchcon}>
        <TouchableOpacity
          onPress={() => onPress("fav")}
          style={page === "fav" ? styles.hconActive : styles.hcon}
        >
          <Text style={styles.header}>Favourites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress("browse")}
          style={page === "browse" ? styles.hconActive : styles.hcon}
        >
          <Text style={styles.header}>Browse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Switch;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
  },
  switchcon: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 26,
    marginBottom: 7,
  },
  hcon: {
    width: "40%",
    marginRight: "5%",
    marginLeft: "5%",
    alignItems: "center",
  },
  hconActive: {
    marginRight: "5%",
    marginLeft: "5%",
    width: "40%",
    alignItems: "center",
    borderBottomColor: "#1157A7",
    borderBottomWidth: 2,
    marginBottom: 4,
  },
  header: {
    fontFamily: "Abel",
    fontSize: 17,
    textAlign: "center",
  },
});
