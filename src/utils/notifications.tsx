import { Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";

export function notifySucccess(message: string){
    showMessage({
        message: message,
        type: "success",
        icon: "success",
        backgroundColor: "#19efb7",
        duration: 500,
        style: {
            borderRadius: RFValue(20),
            marginTop: Platform.OS === 'ios' ? RFValue(20) : RFValue(30),
            marginLeft: RFValue(15),
            marginRight: RFValue(15)
        }
    });
}

export function notifyError(message: string){
    showMessage({
        message: message,
        type: "danger",
        icon: "warning",
        duration: 500,
        style: {
            paddingTop: Platform.OS === 'ios' ? 10 : 50
        }
    });
}