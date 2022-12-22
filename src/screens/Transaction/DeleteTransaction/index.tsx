import React from "react";
import { useTheme } from "styled-components";
import { Button } from "../../../components/Buttons/Button";
import { OutlinedButton } from "../../../components/Buttons/OutlinedButton";
import { ButtonsWrapper, Container, Separator, ModalTitle, TransactionTitle } from "./styles";

interface Props {
    closeModal: () => void
}

export function DeleteTransaction({closeModal}: Props){
    const theme = useTheme()

    return(
        <Container>
            <ModalTitle>
                Deseja continuar com a exclução do lançamento 
                <TransactionTitle> "{"teste"}"</TransactionTitle>?
            </ModalTitle>
            <ButtonsWrapper>
                <OutlinedButton flex={2.3} title="Cancelar" onPress={closeModal}/>
                <Separator/>
                <Button 
                    flex={3} 
                    textColor={theme.colors.background}
                    color={theme.colors.attention_light} 
                    title="Excluir" 
                    onPress={() => {
                    }}
                />
            </ButtonsWrapper>
        </Container>
    )
}