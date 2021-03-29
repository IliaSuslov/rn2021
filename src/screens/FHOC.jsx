import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/actions";
import FlightsScreen from "./FlightsScreen";
import Loader from "../components/Loader";

const GetPlace = (Places) => (id) =>
  Places.filter((place) => place.PlaceId == id)[0];

const GetCarrier = (Carriers) => (id) =>
  Carriers.filter((Carrier) => Carrier.CarrierId == id)[0];

const serialize = ({ GetPlace, GetCarrier, Symbol }) => (quote) => {
  return {
    ...quote,
    Origin: GetPlace(quote.OutboundLeg.OriginId),
    Destination: GetPlace(quote.OutboundLeg.DestinationId),
    Carriers: quote.OutboundLeg.CarrierIds.map((id) => GetCarrier(id)),
    Symbol,
  };
};

function FHOC({ navigation }) {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const app = useSelector((state) => state.app);
  const page = useSelector((state) => state.flights.page);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return flights.Quotes ? (
    <FlightsScreen
      quotes={flights.Quotes.map(
        serialize({
          Symbol: flights.Currencies[0].Symbol,
          GetPlace: GetPlace(flights.Places),
          GetCarrier: GetCarrier(flights.Carriers),
        })
      )}
      page={page}
      navigation={navigation}
    />
  ) : (
    <Loader />
  );
}

export default FHOC;
