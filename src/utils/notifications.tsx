import { Platform } from "react-native";
import { MessageOptions, showMessage } from "react-native-flash-message";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";

export function notifySucccess(message: string){
    showMessage(messageOptions(message, "success", "success", "#7eda4c"));
}

export function notifyError(message: string){
    showMessage(messageOptions(message, "danger", "warning", "#E83F5B"));
}

function messageOptions(message: string, type: string, icon: string, iconColor: string){
    return {
        message: message,
        type: type,
        icon: icon,
        backgroundColor: "rgba(255,255,255,0.97)",
        color: "#000",
        iconProps: {
            style: {
                width: RFValue(17),
                height: RFValue(17),
                top: -RFValue(1.1),
                tintColor: iconColor,
                marginRight: RFValue(10)
            }
        },
        duration: 500,
        style: {
            borderRadius: RFValue(30),
            marginTop: Platform.OS === 'ios' ? RFValue(35) : RFValue(45),
            marginLeft: RFValue(15),
            marginRight: RFValue(15),
            borderStyle: "solid",
            // borderColor: "#ebebebd1",
            // borderWidth: RFValue(1.1),
            width: RFValue(200),
            alignSelf: 'center',
            display: 'flex'
        }
    } as MessageOptions
}