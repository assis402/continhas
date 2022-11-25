import React from "react";
import { Category, Container, Icon } from "./styles";
import { monthArray, detachMonth, detachYear } from '../../../utils/helper';

interface Props {
    monthYear: string;
    onPress: () => void;
}

export function MonthYearSelectButton({ monthYear, onPress } : Props){
    let month = detachMonth(monthYear)
    let year = detachYear(monthYear)

    return(
        <Container onPress={onPress}>
            <Category>
                {monthArray[month]} de {year}
            </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}