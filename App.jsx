import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import Switch from "./src/components/Switch";
import Flight from "./src/screens/FlightScreen";
import FHOC from "./src/screens/FHOC";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      Abel: require("./assets/fonts/Abel/Abel-Regular.ttf"),
      SFPRO: require("./assets/fonts/SFPRO.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Flights"
            options={{
              headerStyle: { height: 139 },
              headerTitle: (props) => <Switch {...props} />,
            }}
            component={FHOC}
          />
          <Stack.Screen
            name="Flight"
            options={{
              headerShown: false,
              gestureEnabled: true,
              gestureResponseDistance: 'horizontal',
            }}
            component={Flight}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
