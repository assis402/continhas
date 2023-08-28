import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    flex?: number;
    iconName: string;
    width?: number;
    height?: number;
}

export function MiniButton({ iconName, flex = 1, width = 50, height = 35, ...rest }: Props){
    return(
        <Container 
            {...rest}
            flex={flex}
            activeOpacity={0.2}
            width={width}
            height={height}
        >
            <Icon name={iconName}/>
        </Container>
    )
}