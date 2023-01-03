import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components'
import * as SplashScreen from 'expo-splash-screen';
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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <AppRoutes/>
                </NavigationContainer>
                <FlashMessage position="top" />
                <StatusBar style="light" translucent />
            </ThemeProvider>
        </View>
    )
}