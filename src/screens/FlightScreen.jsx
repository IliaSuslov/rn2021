import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AirPlane from "../../assets/airplane.jpeg";
import { Slider } from "../components/Slider";
import Icon from "react-native-vector-icons/Ionicons";
import HearthIcon from "../components/HearthIcon";
import moment from "moment";
import { switchFav } from "../store/actions";
import { useDispatch } from "react-redux";

function FlightScreen(quote) {
  const dispatch = useDispatch();
  const {
    Destination,
    Origin,
    MinPrice,
    Symbol,
    OutboundLeg,
    QuoteId,
    fav,
  } = quote.route.params;
  return (
    <View style={styles.wrap}>
      <View style={styles.imagecon}>
        <Image style={styles.image} source={AirPlane} />
      </View>

      <View style={styles.infocon}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            dispatch(switchFav(QuoteId));
            quote.navigation.setParams({
              fav: !fav,
            });
          }}
        >
          <HearthIcon state={fav} />
        </TouchableOpacity>

        <View style={styles.info}>
          <View style={styles.dates}>
            <Text style={styles.dates}>
              {moment(OutboundLeg.DepartureDate).format("DD MMMM, YYYY")}
            </Text>
            <Text style={styles.dates}>
              {moment(OutboundLeg.DepartureDate).format("hh: mm")}
            </Text>
          </View>

          <View style={styles.places}>
            <Text style={styles.places}>{Origin.SkyscannerCode}</Text>
            <Icon
              style={styles.places}
              name="chevron-forward"
              color="#A7A7A7"
            />
            <Text style={styles.places}>{Destination.SkyscannerCode}</Text>
          </View>

          <View style={styles.city}>
            <Text style={styles.city}>{Origin.CityName}</Text>
            <Text style={styles.city}>{Destination.CityName}</Text>
          </View>
        </View>

        <View style={styles.bluecon}>
          <View style={styles.left}>
            <Text style={styles.title}>Price</Text>
            <Text style={styles.nums}>
              {MinPrice} {Symbol}
            </Text>
          </View>

          <View style={styles.right}>
            <Text style={styles.title}>Boarding</Text>
            <Text style={styles.nums}>19:20</Text>
          </View>
        </View>

        <View>
          <Slider />
        </View>
      </View>
    </View>
  );
}

export default FlightScreen;

const styles = StyleSheet.create({
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "abel",
  },
  imagecon: {
    width: 375,
    height: 340,
  },
  image: {
    width: "100%",
  },
  infocon: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: "100%",
    borderRadius: 30,
  },
  info: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  dates: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "SFPRO",
    fontSize: 13,
    color: "#878787",
    marginRight: 24,
  },
  city: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "SFPRO",
    fontSize: 13,
    color: "#878787",
    marginRight: 12,
  },
  places: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 36,
    marginRight: 10,
  },
  bluecon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 315,
    height: 80,
    backgroundColor: "#1157A7",
    borderRadius: 10,
    margin: 30,
  },
  left: {
    width: 116,
    height: "70%",
    borderRightColor: "white",
    borderRightWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  right: {
    width: 116,
    height: "70%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "SFPRO",
    fontSize: 13,
  },
  nums: {
    color: "white",
    fontFamily: "Abel",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    top: 25,
    right: 23,
  },
});
