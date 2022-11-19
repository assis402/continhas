import React from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Forms/Button";
import { MonthYearPicker } from "../../components/MonthYearPicker";
import { Container, ExternalModal, InternalModal } from "./styles";

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
    
    function handleMonthYearSelect(monthYear: string){
        setMonthYear(monthYear);
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
                        <MonthYearPicker/>
                        <Button 
                            title="Selecionar"
                            onPress={closeSelectMonthYear}
                        />
                    </InternalModal>
                </ExternalModal>
            </Modal>
        </Container>
    )
}