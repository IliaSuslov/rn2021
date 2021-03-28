import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

//Components
import FlightItem from "../components/FlightItem";

function FlightsScreen(props) {
  const { quotes, page, navigation } = props;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {page == "browse"
          ? quotes.map((quote, id) => (
              <FlightItem
                key={`flight${id}`}
                openItem={() => navigation.navigate("Flight", quote)}
                data={quote}
              />
            ))
          : quotes
              .filter((v) => (v.fav == true ? v : null))
              .map((quote, id) => (
                <FlightItem
                  key={`flight${id}`}
                  openItem={() => navigation.navigate("Flight", quote)}
                  data={quote}
                />
              ))}
      </ScrollView>
    </View>
  );
}

export default FlightsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  list: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontFamily: "Abel",
  },
});
