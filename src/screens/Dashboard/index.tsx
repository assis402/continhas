import React, { useCallback, useState } from 'react'
import { Transaction } from '../../classes/Transaction';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator, BackHandler } from 'react-native'
import { useTheme } from 'styled-components'
import { getMonthByPeriod } from '../../utils/helper'

import {
    Container,
    Header,
    UserWrapper,
    MonthYearWrapper,
    UserInfo,
    User,
    UserGreeting,
    UserName,
    Power,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,
    LoadContainer,
    NoTransactions,
    NoTransactionsTitle,
    NoTransactionsText,
    MiniIcon,
    NoTransactionsImg,
    TransactionsHeader,
    TransactionOptions,
    Separator,
} from './styles'

import { PeriodSelectModal } from '../../modals/PeriodSelectModal';
import { PeriodSelectButton } from '../../components/Forms/PeriodSelectButton';
import TransactionService from '../../services/Transaction';
import { MiniButton } from '../../components/Buttons/MiniButton';
import { DashboardProps, defaultDashboardProps } from '../../classes/Dashboard';
import { AddTransaction } from '../Transaction/AddTransaction';
import { UpdateTransaction } from '../Transaction/UpdateTransaction';
import { AddFrequentTransaction } from '../Transaction/AddFrequentTransaction';

const today = new Date();
const defaultPeriod = today.getMonth().toString() + today.getFullYear().toString();

interface Props {
    navigation: any
}

export function Dashboard({ navigation }: Props){    
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<DashboardProps>(defaultDashboardProps);

    const [periodModalIsOpen, setPeriodModalIsOpen] = useState(false)
    const [period, setPeriod] = useState(defaultPeriod)
    
    const [reloadCounter, setReloadCounter] = useState(0);

    const theme = useTheme();

    function reload(){
        setReloadCounter(reloadCounter + 1);
    }

    function handlePeriod(period: string){
        reload();
        setPeriod(period)
    }

    function navigateToAddScreen(){
        navigation.navigate('Add')
    }

    function navigateToAddFrequentScreen(){
        navigation.navigate('AddFrequent')
    }

    function handleExitApp(){
        BackHandler.exitApp()
    }

    async function loadTransactions(){
        // await AsyncStorage.clear()
        let data = await TransactionService.getAllByPeriod(period)
        setTransactions(data);

        if (data.length > 0)
            setHighlightData(TransactionService.getDashboardHighlights(data))             

        setIsLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, [reloadCounter]));

    return (
        <Container>
            {
                isLoading ? 
                <LoadContainer>
                    <ActivityIndicator 
                        color={theme.colors.success_secundary}
                        size="large"    
                    />
                </LoadContainer> : 
                <>
                    <Header>
                        <UserWrapper>
                            <UserInfo>
                                <User>
                                    <UserGreeting>
                                        Olá, <UserName>Matheus</UserName>
                                    </UserGreeting>
                                </User>
                            </UserInfo>
                            <Power name="log-out" onPress={handleExitApp}/>
                        </UserWrapper>
                        <MonthYearWrapper>
                            <PeriodSelectButton 
                                period={period}
                                onPress={() => {}}
                            />
                        </MonthYearWrapper>
                        <HighlightCards>
                            <HighlightCard 
                                type='income' 
                                amount={highlightData.income.total}
                                lastTransaction={highlightData.income.lastTransaction}
                            />
                            <HighlightCard 
                                type='outcome' 
                                amount={highlightData.outcome.total}
                                lastTransaction={highlightData.outcome.lastTransaction}
                            />
                            <HighlightCard 
                                type='balance'
                                amount={highlightData.sum.total}
                                lastTransaction=''
                            />
                        </HighlightCards>
                    </Header>
                    { transactions.length === 0 ?
                        <NoTransactions>
                            <NoTransactionsTitle>Nenhum lançamento este mês</NoTransactionsTitle>
                            <NoTransactionsText>
                                Cadastre a sua primeira transação do mês de {getMonthByPeriod(period)} clicando em &nbsp;
                                <MiniIcon name="plus-circle"/>
                            </NoTransactionsText>
                            <NoTransactionsImg source={require("../../assets/no-result.png")}/>
                        </NoTransactions> :
                        <Transactions>
                            <TransactionsHeader>
                                <Title>Lançamentos</Title>
                                <TransactionOptions>
                                    <MiniButton
                                        iconName='plus'
                                        flex={1}
                                        onPress={navigateToAddScreen}
                                    />
                                    <Separator/>
                                    <MiniButton
                                        iconName='rotate-cw'
                                        flex={1}
                                        onPress={navigateToAddFrequentScreen}
                                    />
                                </TransactionOptions>
                            </TransactionsHeader>
                            <TransactionList<any>
                                data={transactions}
                                keyExtrator={(item: Transaction) => item.id}
                                renderItem={({ item }: { item: Transaction }) => 
                                    <TransactionCard
                                        navigation={navigation}
                                        data={item}
                                    />}
                            />
                        </Transactions>
                    }
                </>
            }
        </Container>
    )
}