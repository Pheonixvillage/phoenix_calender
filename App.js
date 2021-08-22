import { StatusBar } from 'expo-status-bar';
import React, { Component , useState, createContext} from 'react'
import { StyleSheet, Text, View } from 'react-native';





import Loading from './Pages/Loading';
import Login from './Pages/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Firebase from './Pages/components/Firebase';

export const authService = Firebase.auth();
export const dbService = Firebase.firestore();
export const storageService = Firebase.storage();

import { 
  useFonts,
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold 
} from '@expo-google-fonts/dancing-script'

const Stack = createNativeStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    DancingScript_500Medium,
  });
  const [page, setPage] = useState("Login");
  const UserEmail = createContext("");
  if(!fontsLoaded){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Loading} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  if(page == "Loading"){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
  if(page == "Login"){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} initialParams={{itemId: 10, useremail: "wee"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


