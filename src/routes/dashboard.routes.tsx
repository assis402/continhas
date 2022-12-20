import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Add } from '../modals/Add';
import { Dashboard } from '../screens/Dashboard';
import { Summary } from '../screens/Summary';
const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerShown: false
}

export function DashboardRoutes(){
    return ( 
        <Stack.Navigator>
            <Stack.Screen 
                name="Dashboard" 
                component={Dashboard}
                options={defaultScreenOptions}
            />
            <Stack.Screen 
                name="Add" 
                component={Add}
                options={defaultScreenOptions}
            />
        </Stack.Navigator>
    )
}