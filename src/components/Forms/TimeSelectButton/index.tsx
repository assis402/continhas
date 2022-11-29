import React from "react";
import { Time, Container, Icon } from "./styles";
import { formatTimeToRegister } from '../../../utils/helper';

interface Props {
    dateTime: Date | undefined;
    onPress: () => void;
}

export function TimeSelectButton({ dateTime, onPress } : Props){

    let time = dateTime === undefined ? "Agora" : formatTimeToRegister(dateTime)

    return(
        <Container onPress={onPress}>
            <Icon name="clock"/>
            <Time>
                {time}
            </Time>
            <Icon name="chevron-down"/>
        </Container>
    )
}