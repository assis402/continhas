import React from 'react'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
                tabBarActiveTintColor: theme.colors.secondary_new,
                tabBarInactiveTintColor: theme.colors.secondary_light_new,
                tabBarStyle: {
                    backgroundColor: theme.colors.background,
                    height: 65,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    paddingHorizontal: 20,
                    borderTopWidth: 0.5,
                    borderColor: theme.colors.secondary_super_light_new,
                },
                tabBarShowLabel: false, 
                tabBarHideOnKeyboard: true
            }}
        >
            <Screen 
                name="0"
                component={DashBoard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='home'
                            size={35}
                            color={color}
                            style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                        />
                    )
                }}
            />
            <Screen 
                name="1"
                component={Register}
                options={{
                    tabBarIcon: (({ color }) => 
                        <Feather 
                            name='plus-circle'
                            size={35}
                            color={color}
                            style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                        />
                    )
                }}
            />
            <Screen 
                name="2"
                component={Summary}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='pie-chart'
                            size={35}
                            color={color}
                            style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                        />
                    )
                }}
            />
        </Navigator>
    )
}