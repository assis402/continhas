import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Add } from '../modals/Add';
import { Delete } from '../modals/Delete';
import { Dashboard } from '../screens/Dashboard';
import { Summary } from '../screens/Summary';
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
                component={Add}
                options={defaultScreenOptions}
            />
            <Stack.Screen 
                name="Delete" 
                component={Delete}
                options={modalOptions}
            />
        </Stack.Navigator>
    )
}