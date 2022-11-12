import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes'
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
            <FlashMessage position="top" />
            <StatusBar style="light" translucent />
        </ThemeProvider>
    )
}