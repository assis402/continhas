import React from "react";
import { Category, Container, Icon } from "./styles";
import { detachYear, getMonthByPeriod } from '../../../utils/helper';

interface Props {
    period: string;
    onPress: () => void;
}

export function PeriodSelectButton({ period, onPress } : Props){
    let month = getMonthByPeriod(period)
    let year = detachYear(period)

    return(
        <Container onPress={onPress}>
            <Category>
                {month} de {year}
            </Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}