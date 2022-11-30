import { Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export function notifySucccess(message: string){
    showMessage({
        message: message,
        type: "success",
        icon: "success",
        style: {
            paddingTop: Platform.OS === 'ios' ? 10 : 50
        }
    });
}

export function notifyError(message: string){
    showMessage({
        message: message,
        type: "danger",
        icon: "warning",
        style: {
            paddingTop: Platform.OS === 'ios' ? 10 : 50
        }
    });
}