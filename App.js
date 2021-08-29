import { StatusBar } from 'expo-status-bar';
import React, { Component , useState, createContext} from 'react'
import { StyleSheet, Text, View } from 'react-native';






import Loading from './Pages/Loading';
import Login from './Pages/Login';
import Calender from './Pages/Calender';
import Register from './Pages/Register';

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

export const login_funtion = createContext(App.login);

export default function App() {
  
  


  let [fontsLoaded] = useFonts({
    DancingScript_500Medium,
  });
  const [page, setPage] = useState("Login");
  const [userinfo, setUserinfo] = useState({});

  async function login(useremail, userpass){
    authService.signInWithEmailAndPassword(useremail, userpass)
      .then((userCredential)=>{
        var user = userCredential.user;
        console.log(user);
        setUserinfo(user);
        setPage("Calender");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("err");
        console.log(errorMessage);
        console.log(useremail);
        console.log(userpass);
      });
    
  }
  async function start_login(useremail, userpass){
    console.log("start")
    console.log("ong" + useremail);
    console.log("ongong" + userpass);
    
   setPage("Loading");
    await login(useremail, userpass);
  }

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
          <Stack.Screen name="Login" component={Login} initialParams={{itemId: 10, useremail: "wee", start_login: start_login, setPage: setPage}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  if(page == "Register"){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} initialParams={{itemId: 10, useremail: "wee", start_login: start_login, setPage: setPage}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  if(page == "Calender"){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="My Calender" component={Calender} initialParams={{itemId: 10, useremail: "wee"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


