import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScheduleScreen from "./screens/ScheduleScreen";
import PostScreen from "./screens/PostScreen";
import ScheduleScreen2 from "./screens/ScheduleScreen2";

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: "FoodFinder" }}
        />
        <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{ title: "Food Details" }}
        />
        <Stack.Screen
            name="ScheduleScreen2"
            component={ScheduleScreen2}
            options={{ title: "FoodFinder", headerLeft: null }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
