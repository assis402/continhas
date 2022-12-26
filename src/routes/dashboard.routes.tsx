import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Dashboard } from '../screens/Dashboard';
import { AddFrequentTransaction } from '../screens/Transaction/AddFrequentTransaction';
import { AddTransaction } from '../screens/Transaction/AddTransaction';
import { UpdateTransaction } from '../screens/Transaction/UpdateTransaction';
const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animationTypeForReplace: 'push',
    animation:'fade_from_bottom'
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
                component={AddTransaction}
                options={defaultScreenOptions}
            />
            <Stack.Screen 
                name="AddFrequent" 
                component={AddFrequentTransaction}
                options={defaultScreenOptions}
            />
            <Stack.Screen 
                name="Update"
                component={UpdateTransaction}
                options={defaultScreenOptions}
            />
        </Stack.Navigator>
    )
}