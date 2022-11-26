import React from "react";
import { Date, Container, Icon } from "./styles";
import { formatDateToRegister } from '../../../utils/helper';

interface Props {
    dateTime: Date;
    onPress: () => void;
}

export function DateSelectButton({ dateTime, onPress } : Props){
    let date = formatDateToRegister(dateTime)

    return(
        <Container onPress={onPress}>
            <Icon name="calendar"/>
            <Date>
                {date}
            </Date>
            <Icon name="chevron-down"/>
        </Container>
    )
}