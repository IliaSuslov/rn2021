import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Plane from "../../assets/Plane.png";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import HearthIcon from "./HearthIcon";
import { switchFav } from "../store/actions";
import { useDispatch } from "react-redux";

function FlightItem(props) {
  const dispatch = useDispatch();
  const { data, openItem } = props;
  const {
    OutboundLeg,
    MinPrice,
    Origin,
    Destination,
    Carriers,
    Symbol,
    QuoteId,
    fav,
  } = data;

  return (
    <View style={styles.container}>
      <View style={styles.topinfo}>
        <TouchableOpacity style={styles.image} onPress={openItem}>
          <Image source={Plane} />
        </TouchableOpacity>

        <View style={styles.info}>
          <View style={styles.way}>
            <Text style={styles.city}>{Origin.CityName}</Text>
            <Icon
              style={styles.city}
              name="arrow-forward"
              size={20}
              color="#878787"
            />
            <Text style={styles.city}>{Destination.CityName}</Text>
          </View>
          <Text style={styles.text}>
            {Origin.SkyscannerCode} -{" "}
            {moment(OutboundLeg.DepartureDate).format("DD MMMM, YYYY - hh:mm")}
          </Text>
          <Text style={styles.text}>{Carriers.map((v) => v.Name)}</Text>
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => dispatch(switchFav(QuoteId))}
        >
          <HearthIcon state={fav} />
        </TouchableOpacity>
      </View>

      <View style={styles.value}>
        <Text style={styles.price}>Price:</Text>
        <Text style={styles.nums}>
          {MinPrice} {Symbol}
        </Text>
      </View>
    </View>
  );
}
export default FlightItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: 335,
    height: 135,
    borderRadius: 8,
    alignItems: "center",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topinfo: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: 93,
    borderBottomColor: "rgba(196, 196, 196, 0.5)",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    top: 19,
  },
  way: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "rgba(0, 119, 255, 0.05)",
    top: 19,
  },
  city: {
    fontSize: 17,
    fontFamily: "Abel",
    marginRight: 12,
  },
  text: {
    fontFamily: "SFPRO",
    color: "rgba(135, 135, 135, 1)",
    fontSize: 13,
    marginTop: 2,
  },
  value: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 17,
  },
  price: {
    fontSize: 11,
    marginTop: 12.5,
    marginRight: 8,
    fontFamily: "Abel",
    color: "rgba(135, 135, 135, 1)",
  },
  nums: {
    fontSize: 17,
    marginTop: 7.5,
    fontFamily: "SFPRO",
  },
  arrow: {
    top: 5,
    marginRight: 12,
    color: "rgba(196, 196, 196, 1)",
  },
  icon: {
    top: 15,
  },
});
