import React from "react";
import { Modal } from "react-native";
import { MonthYearPicker } from "../../components/MonthYearPicker";
import { Container, ExternalModal, InternalModal } from "./styles";
import { toString2Pad } from "../../utils/helper"

interface Props {
    monthYear: string;
    setMonthYear: (monthYear: string) => void;
    closeSelectMonthYear: () => void;
    modalIsOpen: boolean;
}

export function MonthYearSelectModal({
    monthYear,
    setMonthYear,
    closeSelectMonthYear,
    modalIsOpen
} : Props){
    
    function handleMonthYearSelect(month: number, year: number){
        let monthYear = toString2Pad(month) + year.toString()
        setMonthYear(monthYear);
        closeSelectMonthYear();
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
                            monthYear={monthYear}
                            handleSelectFunction={handleMonthYearSelect}
                        /> 
                    </InternalModal>
                </ExternalModal>
            </Modal>
        </Container>
    )
}