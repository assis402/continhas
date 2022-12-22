import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Dashboard } from '../screens/Dashboard';
import { AddFrequentTransaction } from '../screens/Transaction/AddFrequentTransaction';
import { AddTransaction } from '../screens/Transaction/AddTransaction';
import { DeleteTransaction } from '../screens/Transaction/DeleteTransaction';
import { UpdateTransaction } from '../screens/Transaction/UpdateTransaction';
const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animationTypeForReplace: 'push',
    animation:'fade_from_bottom'
}

const modalOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animationTypeForReplace: 'push',
    animation:'fade',
    presentation: 'transparentModal' 
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
            <Stack.Screen 
                name="Delete" 
                component={DeleteTransaction}
                options={modalOptions}
            />
        </Stack.Navigator>
    )
}