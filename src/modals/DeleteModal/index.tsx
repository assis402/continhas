import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";
import { Button } from "../../components/Forms/Button";
import { OutlinedButton } from "../../components/Forms/OutlinedButton";
import { ButtonsWrapper, Container, Separator, ModalTitle, TransactionTitle } from "./styles";

interface Props {
    id: string
    transactionTitle: string
    closeModal: () => void
    modalIsOpen: boolean
    reload: () => void
}

export function DeleteModal({id, transactionTitle, closeModal, modalIsOpen, reload}: Props){
    const theme = useTheme()

    return(
        <Modal
            statusBarTranslucent
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={modalIsOpen}
            onBackButtonPress={closeModal}
            useNativeDriver
            useNativeDriverForBackdrop
            onBackdropPress={closeModal}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
            }}
            customBackdrop={
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={{ height: `110%`, backgroundColor: '#000'}} />
                </TouchableWithoutFeedback>
            }
        >
            <Container>
                <ModalTitle>
                    Deseja continuar com a exclução do lançamento 
                    <TransactionTitle> "{transactionTitle}"</TransactionTitle>?
                </ModalTitle>
                <ButtonsWrapper>
                    <OutlinedButton flex={2.3} title="Cancelar" onPressOut={closeModal}/>
                    <Separator/>
                    <Button 
                        flex={3} 
                        textColor={theme.colors.background}
                        color={theme.colors.attention_light} 
                        title="Excluir" 
                        onPress={() => {
                            reload()
                            closeModal()
                        }}
                    />
                </ButtonsWrapper>
            </Container>
        </Modal>
    )
}