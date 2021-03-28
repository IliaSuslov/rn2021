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

export function Slider() {
  return (
    <ScrollView style={styles.container} horizontal={true}>
      {images.map((v, i) => (
        <View key={i} style={styles.imagecon}>
          <Image style={styles.image} key={i} source={v.image} />
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: 'visible'
  },
  image: {
    height: 200,
    width: 139,
    borderRadius: 10,
    marginRight: 10,
  },
});
