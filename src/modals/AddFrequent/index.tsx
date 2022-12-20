import React, { useEffect, useState } from 'react'

import Modal from "react-native-modal";
import TransactionService from '../../services/Transaction';

import {
    Container,
    Form,
    Header,
    Title,
    Separator,
    HeaderButtons,
    Footer,
    FrequentList,
} from './styles'
import { notifyError, notifySucccess } from '../../utils/notifications'
import { Checkbox } from '../../components/Forms/Checkbox'
import theme from '../../global/styles/theme'
import { BackButton } from '../../components/Buttons/BackButton'
import { OutlinedButton } from '../../components/Buttons/OutlinedButton';
import { Button } from '../../components/Buttons/Button';
import { Transaction } from '../../classes/Transaction';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
    closeModal: () => void
    modalIsOpen: boolean
    reload: () => void
}

export function AddFrequentModal({ closeModal, modalIsOpen, reload }: Props){
    const [frequentList, setFrequentList] = useState<Transaction[]>([])

    async function loadData() {
        const data = await TransactionService.getAllFrequent();
        console.log(data);
        setFrequentList(data);
    }

    async function handleAdd() {
    }

    // useEffect(() => {
    //     loadData()
    // }, [modalIsOpen]);
    
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
                    <FrequentList<any>
                        data={frequentList}
                        keyExtrator={(item: Transaction) => item.id}
                        renderItem={({ item }: { item: Transaction }) => 
                                <Checkbox
                                title={item.title}
                                value={true}
                                onPress={() => {}}
                                color={undefined}
                                containerStyle={{
                                }}
                            />
                        }
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
                            onPress={() => {
                            }}
                        />
                    </Footer>
                </Form>
            </Container>
        </Modal>
    )
}