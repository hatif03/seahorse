import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

type Props = {}

const Stack = createNativeStackNavigator()

const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen options={{headerShown:false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Signup' component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation