import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home/Home';
import Employees from './Components/Employees/Employees';
import AddDetails from './Components/AddDetails/AddDetails';
import Markattendance from './Components/MarkAttendance/Markattendance';
import User from './Components/User/User';
import Summary from './Components/Summary/Summary';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="Employees"
          component={Employees}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="AddDetails"
          component={AddDetails}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="Markattendance"
          component={Markattendance}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{headerShown: false, animation: 'slide_from_left'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
