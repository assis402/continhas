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
                    backgroundColor: theme.colors.background_navigation,
                    height: Platform.OS === 'ios' ? 80 : 65,
                    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
                    paddingHorizontal: 20,
                    borderTopWidth: 0,
                    borderColor: theme.colors.secondary_super_light_new,
                    marginLeft: 50,
                    marginRight: 50,
                    marginBottom: 20,
                    borderRadius: 45,
                    position: 'absolute'
                },
                tabBarShowLabel: false, 
                tabBarHideOnKeyboard: false,
            }}
        >
            <Screen 
                name="0"
                component={DashBoard}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <Feather 
                            name='home'
                            size={Platform.OS === 'ios' ? 30 : 35}
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
                            size={Platform.OS === 'ios' ? 30 : 35}
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
                            size={Platform.OS === 'ios' ? 30 : 35}
                            color={color}
                            style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                        />
                    )
                }}
            />
        </Navigator>
    )
}