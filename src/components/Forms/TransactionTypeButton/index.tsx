import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps{
    type: 'income' | 'outcome';
    isActive: boolean;
}

const title = {
    income: 'Entrada',
    outcome: 'Saída'
}

const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    balance: 'dollar-sign'
}

export function TransactionTypeButton({ type, isActive, ...rest }: Props){
    return(
        <Container {...rest} isActive={isActive} type={type}>
            <Icon name={ icon[type] } type={type}/>
            <Title>
                { title[type] }
            </Title>
        </Container>
    )
}