import React, { useState } from 'react'
import { BackHandler } from 'react-native'
import TransactionService from '../../../services/Transaction';

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
import { notifyError, notifySucccess } from '../../../utils/notifications'
import { Checkbox } from '../../../components/Forms/Checkbox'
import { BackButton } from '../../../components/Buttons/BackButton'
import { OutlinedButton } from '../../../components/Buttons/OutlinedButton';
import { Button } from '../../../components/Buttons/Button';
import { Transaction } from '../../../classes/Transaction';

interface Props {
    navigation: any
    route: any
}

export function AddFrequentTransaction({ navigation, route }: Props){
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    function handleBackButton(){
        navigation.navigate("Dashboard");
        return true;
    }

    const { reload, openLoading } = route.params;
    const [frequentList, setFrequentList] = useState<Transaction[]>([])

    async function loadData() {
        const data = await TransactionService.getAllFrequent();
        console.log(data);
        setFrequentList(data);
    }

    async function handleAdd() {
        
    }
    
    return (
        <Container>
            <Header>
                <HeaderButtons>
                    <BackButton onPress={handleBackButton}/>
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
    )
}