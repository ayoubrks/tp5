import 'react-native-gesture-handler';

import React, { useContext, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";  // ✅ AJOUTE CECI
import { store } from "./store/store";    // ✅ AJOUTE CECI

import AuthProvider, { AuthContext } from './context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

function RootNavigator() {
  const { user } = useContext(AuthContext);

  // ✅ Plus propre avec des options
  const screenOptions = { headerShown: false };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {user ? (
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}> {/* ✅ ENVELOPPE AVEC PROVIDER */}
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </AuthProvider>
  );
}