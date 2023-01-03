import { ActivityIndicator } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useTheme } from "styled-components";
import { Container } from "./styles";

export function Loading(){
    const theme = useTheme()

    return(
        <Container>
            <ActivityIndicator 
                color={theme.colors.secondary_new}
                size="large"
                style={{
                    top: '-5%'
                }}
            />
        </Container>
    )
}