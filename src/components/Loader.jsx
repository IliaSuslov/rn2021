import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Loader() {
  return (
    <View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

export default Loader;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Abel",
  },
});
