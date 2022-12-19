import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    flex: number;
    iconName: string;
}

export function MiniButton({ iconName, flex = 1, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.2}
        >
            <Icon name={iconName}/>
        </Container>
    )
}