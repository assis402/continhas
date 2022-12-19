import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from "./styles";

export function BackButton({...rest}: TouchableOpacityProps){
    return(
        <Container 
            activeOpacity={0.2}
            {...rest}
        >
            <Icon name='chevron-left'/>
        </Container>
    )
}