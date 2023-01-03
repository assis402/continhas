import React from "react";
import { useTheme } from "styled-components";
import { Transaction } from "../../../classes/Transaction";
import { Button } from "../../../components/Buttons/Button";
import { OutlinedButton } from "../../../components/Buttons/OutlinedButton";
import TransactionService from "../../../services/Transaction";
import { notifySucccess, notifyError } from "../../../utils/notifications";
import { ButtonsWrapper, Container, Separator, ModalTitle, TransactionTitle } from "./styles";

interface Props {
    transaction: Transaction
    reload: () => void
    openLoading: () => void
    closeModal: () => void
}

export function DeleteTransactionModal({ transaction, openLoading, reload, closeModal}: Props){
    const theme = useTheme()

    async function handleDelete(){
        try {
            closeModal()
            openLoading()
            await TransactionService.delete(transaction.id)
            reload()
        } catch (error) {
            console.log(error);
            notifyError("Não foi possível excluír o lançamento")
        }
    }

    return(
        <Container>
            <ModalTitle>
                Deseja continuar com a exclução do lançamento 
                <TransactionTitle> "{transaction.title ?? ''}"</TransactionTitle>?
            </ModalTitle>
            <ButtonsWrapper>
                <OutlinedButton flex={2.3} title="Cancelar" onPress={closeModal}/>
                <Separator/>
                <Button 
                    flex={3} 
                    textColor={theme.colors.background}
                    color={theme.colors.attention_light} 
                    title="Excluir" 
                    onPress={handleDelete}
                />
            </ButtonsWrapper>
        </Container>
    )
}