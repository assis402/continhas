import React from "react";
import { Category, Container, Icon } from "./styles";
import { detachYear, getMonthByPeriod } from '../../../utils/helper';

interface Props {
    monthYear: string;
    onPress: () => void;
}

export function MonthYearSelectButton({ monthYear, onPress } : Props){
    let month = getMonthByPeriod(monthYear)
    let year = detachYear(monthYear)

    return(
        <Container onPress={onPress}>
            <Category>
                {month} de {year}
            </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}