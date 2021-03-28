export const ParseData = (data) => {
    const { Places, Carriers, Quotes, Currencies } = data

    const GetPlace = (Places) => (id) =>
        Places.filter((place) => place.PlaceId == id)[0];

    const GetCarrier = (Carriers) => (id) =>
        Carriers.filter((Carrier) => Carrier.CarrierId == id)[0];


    // const getPlace = GetPlace(flights.Places);

    // const Origin = getPlace(flights.OutboundLeg.OriginId);
    // const Destination = getPlace(flights.OutboundLeg.DestinationId);


    // const getCarrier = GetCarrier(flights.Carriers);

}