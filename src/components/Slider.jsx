import React from "react";
import { StyleSheet, View, Image } from "react-native";
import photo1 from "../../assets/photo1.jpeg";
import photo2 from "../../assets/photo2.jpeg";
import photo3 from "../../assets/photo1.jpeg";
import { ScrollView } from "react-native-gesture-handler";

const images = [
  {
    image: photo1,
  },
  {
    image: photo2,
  },
  {
    image: photo3,
  },
];

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};              
export function Slider() {
  return (
    <ScrollView style={styles.container} horizontal={true}>
      {images.map((v, i) => (
        <View key={i}>
          <Image style={styles.image} key={i} source={v.image} />
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: "#C4C4C4",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginLeft: 30,
    width: "100%",
  },
  image: {
    height: 200,
    width: 139,
    borderRadius: 10,
    marginRight: 10,
  },
});
