import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import Modal from "react-native-modal";
import { Container, Title } from "./styles";

interface Props {
    id: string
    closeModal: () => void
    modalIsOpen: boolean
}

export function DeleteModal({id, closeModal, modalIsOpen}: Props){
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
                <Title>
                    Teste
                </Title>
            </Container>
        </Modal>
    )
}