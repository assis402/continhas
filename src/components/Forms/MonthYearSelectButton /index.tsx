import React from "react";
import { Category, Container, Icon } from "./styles";
import { monthArray } from '../../../utils/helper';

interface Props {
    monthYear: string;
    onPress: () => void;
}

export function MonthYearSelectButton({ monthYear, onPress } : Props){
    let month = Number.parseInt(monthYear.substring(0,2))
    let year = monthYear.substring(2)

    return(
        <Container onPress={onPress}>
            <Category>
                {monthArray[month]} / {year}
            </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}