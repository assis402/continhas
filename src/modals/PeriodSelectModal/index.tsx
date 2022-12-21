import React from "react";
import { Modal } from "react-native";
import { MonthYearPicker } from "../../components/MonthYearPicker";
import { Container, ExternalModal, InternalModal } from "./styles";
import { toString2Pad } from "../../utils/helper"

interface Props {
    period: string;
    setPeriod: (period: string) => void;
    closeSelectPeriod: () => void;
    modalIsOpen: boolean;
}

export function PeriodSelectModal({
    period,
    setPeriod,
    closeSelectPeriod,
    modalIsOpen
} : Props){
    
    function handlePeriodSelect(month: number, year: number){
        let period = toString2Pad(month) + year.toString()
        setPeriod(period);
        closeSelectPeriod();
    }

    return(
        <Container>
            <Modal
                visible={modalIsOpen}
                transparent={true}
                animationType='fade'
                statusBarTranslucent
            >
                <ExternalModal>
                    <InternalModal>
                        <MonthYearPicker
                            monthYear={period}
                            handleSelectFunction={handlePeriodSelect}
                        /> 
                    </InternalModal>
                </ExternalModal>
            </Modal>
        </Container>
    )
}