import React from 'react'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { DashBoard } from '../screens/Dashboard'
import { Register } from '../screens/Register'
import { Summary } from '../screens/Summary'

export function AppRoutes(){
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.title,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    paddingHorizontal: 20,
                    // position: 'absolute'
                },
                tabBarLabelStyle: {
                    lineHeight: 19,
                    fontSize: 17,
                },
                tabBarIconStyle: {
                    width: 14
                },
                // tabBarHideOnKeyboard: true
            }}
        >
            <Screen 
                name="Listagem"
                component={DashBoard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name='format-list-bulleted'
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name='attach-money'
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
            <Screen 
                name="Resumo"
                component={Summary}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name='pie-chart'
                            size={28}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}