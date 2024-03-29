import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Main from "./src/components/Main";
import SingleView from "./src/pages/SingleView";
const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Home"
            component={Main}
            options={{ headerShown: false }}
          />
          <Screen
            name="Single Movie"
            component={SingleView}
            options={({ route }) => ({
              title: route.params.title,
              headerBackTitle: "Back to List",
            })}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;