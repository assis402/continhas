import { ActivityIndicator } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useTheme } from "styled-components";
import { Container } from "./styles";

interface Props {
    isVisible: boolean
}

export function Loading({ isVisible }: Props){
    const theme = useTheme()

    return(
        <ReactNativeModal
            isVisible={isVisible}
            statusBarTranslucent
            animationIn={"fadeIn"}
            animationOut={"fadeOut"}
            hasBackdrop={false}
            animationInTiming={1000}
            animationOutTiming={1000}
            style={{
                margin: 0,
                bottom: 0,
                marginTop: 550
            }}
        >
            <Container>
                <ActivityIndicator 
                    color={theme.colors.success_secundary}
                    size="large"
                    style={{
                        top: -40
                    }}
                />
            </Container>
        </ReactNativeModal>
    )
}