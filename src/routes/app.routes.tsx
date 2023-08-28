import React from 'react'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard'
import { Summary } from '../screens/Summary'
import { DashboardRoutes } from './dashboard.routes'

export function AppRoutes(){
    const theme = useTheme();

    return (
            <Navigator
                screenOptions={{ 
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.secondary_new,
                    tabBarInactiveTintColor: theme.colors.secondary_light_new,
                    tabBarStyle: {
                        display: 'none', //TODO: Retornar barra flutuante
                        backgroundColor: theme.colors.background_navigation,
                        height: Platform.OS === 'ios' ? 56 : 61,
                        paddingVertical: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingHorizontal: 20,
                        borderTopWidth: 0,
                        marginLeft: Platform.OS === 'ios' ? 50 : 70,
                        marginRight: Platform.OS === 'ios' ? 50 : 70,
                        marginBottom: Platform.OS === 'ios' ? 30 : 20,
                        borderRadius: 45,
                        position: 'absolute',
                        shadowColor: "#000000",
                        shadowOpacity: 0.15,
                        shadowRadius: 7,
                        shadowOffset: {
                            height: 1,
                            width: 2
                        }
                    },
                    tabBarShowLabel: false, 
                    tabBarHideOnKeyboard: false,
                }}
            >
                <Screen 
                    name="0"
                    component={DashboardRoutes}
                    options={{
                        headerShown: false,
                        tabBarIcon: (({ size, color }) => 
                            <Feather 
                                name='home'
                                size={Platform.OS === 'ios' ? 33 : 35}
                                color={color}
                                style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                            />
                        )
                    }}
                />
                {/* <Screen 
                    name="1"
                    component={Dashboard}
                    options={{
                        tabBarIcon: (({ color }) => 
                            <Feather 
                                name='plus-circle'
                                size={Platform.OS === 'ios' ? 33 : 35}
                                color={color}
                                style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                            />
                        )
                    }}
                /> */}
                <Screen 
                    name="1"
                    component={Summary}
                    options={{
                        tabBarIcon: (({ size, color }) => 
                            <Feather 
                                name='pie-chart'
                                size={Platform.OS === 'ios' ? 33 : 35}
                                color={color}
                                style={{ marginTop: 0 , width: 80, textAlign: 'center', textAlignVertical: 'center'}}
                            />
                        )
                    }}
                />
            </Navigator>
    )
}