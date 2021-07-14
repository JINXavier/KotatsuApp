import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
<<<<<<< Updated upstream
// import Les from './pages/Oefenen';//Deze moeten nog aangemaakt worden wanneer we zover zijn
import Oefenen from './pages/Oefenen';//Deze moeten nog aangemaakt worden wanneer we zover zijn
=======
import Lessen from './pages/Lessen';//Deze moeten nog aangemaakt worden wanneer we zover zijn
//import Oefenen from './tabs/Score';//Deze moeten nog aangemaakt worden wanneer we zover zijn
>>>>>>> Stashed changes
import Vocabulair from './pages/Vocabulair';


function Les() {
  return (
<<<<<<< Updated upstream
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Lessen</Text>
  </View>
=======
    <Lessen />
>>>>>>> Stashed changes
  );
}

function Oefen() {
  return (
        <Oefenen />
  );
}

function Vocab() {
    return (
        <Vocabulair />
    );
  }
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.navigator}>
        <Tab.Screen name="Les" component={Lessen} />
        <Tab.Screen name="Oefenen" component={Oefen} />
        <Tab.Screen name="Vocab" component={Vocab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navigator: {
        marginTop: Constants.statusBarHeight,
    }
})