import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "./screens/ScheduleScreen";
import PostScreen from "./screens/PostScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{ title: "Food Details" }}
        />
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: "Available Items" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
