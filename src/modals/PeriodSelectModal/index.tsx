import React from "react";
import { MonthYearPicker } from "../../components/MonthYearPicker";
import { Container } from "./styles";
import { toString2Pad } from "../../utils/helper"

interface Props {
    period: string;
    setPeriod: (period: string) => void;
    closeModal: () => void;
} 

export function PeriodSelectModal({
    period,
    setPeriod,
    closeModal,
} : Props){
    
    function handlePeriodSelect(month: number, year: number){
        let period = toString2Pad(month) + year.toString()
        console.log(period);
        setPeriod(period);
    }

    return(
        <Container>
            <MonthYearPicker
                monthYear={period}
                handleSelectFunction={handlePeriodSelect}
            /> 
        </Container>
    )
}