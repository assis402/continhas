import React, { useEffect, useState } from 'react'

import Modal from "react-native-modal";
import TransactionService from '../../services/Transaction/transactionService';

import {
    Container,
    Form,
    Header,
    Title,
    Separator,
    HeaderButtons,
    Footer,
} from './styles'
import { notifyError, notifySucccess } from '../../utils/notifications'
import { Checkbox } from '../../components/Forms/Checkbox'
import theme from '../../global/styles/theme'
import { BackButton } from '../../components/BackButton'
import { OutlinedButton } from '../../components/Forms/OutlinedButton';
import { Button } from '../../components/Forms/Button';

interface Props {
    closeModal: () => void
    modalIsOpen: boolean
}

export function AddFrequentModal({ closeModal, modalIsOpen }: Props){
    
    async function loadData() {
        
    }

    async function handleAdd() {
    }

    useEffect(() => {
        loadData()
    }, []);
    
    return (
        <Modal
            statusBarTranslucent
            isVisible={modalIsOpen}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}
            useNativeDriver
            useNativeDriverForBackdrop
            style={{
                margin: 0,
                marginTop: 110
            }}
        >
            <Container>
                <Header>
                    <HeaderButtons>
                        <BackButton onPress={closeModal}/>
                    </HeaderButtons>
                    <Title>Lançamentos Frequentes</Title>
                </Header>
                <Form>
                    <Checkbox
                        title='Lançamento frequente'
                        value={true}
                        onPress={() => {}}
                        color={undefined}
                        containerStyle={{
                            marginBottom: 120
                        }}
                    />
                    <Footer>
                        <OutlinedButton 
                            flex={1}
                            title='Limpar' 
                            onPress={() =>{}}
                        />
                        <Separator/>
                        <Button
                            color=''
                            textColor=''
                            flex={2}
                            title='Adicionar' 
                            onPress={() => {}}
                        />
                    </Footer>
                </Form>
            </Container>
        </Modal>
    )
}