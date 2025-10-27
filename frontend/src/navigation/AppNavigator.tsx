import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
    Home: undefined;
};

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (

        <></>



    );
}