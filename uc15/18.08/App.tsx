import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';
import Perfil from './pages/Perfil';

import { FavoritosProvider } from './context/FavoritosContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaSeries"
        component={Home}
        options={{
          title: 'Início',
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
}

function FavoritosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListaFavoritos"
        component={Favoritos}
        options={{
          title: 'Favoritos',
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'Início') {
            iconName = 'home';
          }

          if (route.name === 'Favoritos') {
            iconName = 'heart';
          }

          if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: '#e50914',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Início"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritosStack}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </FavoritosProvider>
  );
}