import React, { useCallback, useEffect, useState } from 'react'
import { Transaction } from '../../classes/Transaction';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator, BackHandler } from 'react-native'
import { useTheme } from 'styled-components'
import { detachMonth, formatDateToHighlight, getMonthByPeriod } from '../../utils/helper'

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
    NoTransactionsImg
} from './styles'
import { MonthYearSelectModal } from '../../modals/MonthYearSelectModal';
import { MonthYearSelectButton } from '../../components/Forms/MonthYearSelectButton';

interface HighlightProps {
    total: Number,
    lastTransaction: string
}

export function DashBoard(){
    const defaultHighlightProps = {
        total: 0,
        lastTransaction: ''
    }

    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [incomeHighlightData, setIncomeHighlightData] = useState<HighlightProps>(defaultHighlightProps as HighlightProps);
    const [outcomeHighlightData, setOutcomeHighlightData] = useState<HighlightProps>(defaultHighlightProps as HighlightProps);
    const [sumHighlightData, setSumHighlightData] = useState<HighlightProps>(defaultHighlightProps as HighlightProps);

    const today = new Date();
    const [monthYearModalOpen, setMonthYearModalOpen] = useState(false)
    const [monthYear, setMonthYear] = useState((today.getMonth()).toString() + today.getFullYear().toString())

    const theme = useTheme();

    function handleCloseSelectMonthYearModal(){
        setMonthYearModalOpen(false)
    }

    function handleOpenSelectMonthYearModal(){
        setMonthYearModalOpen(true)
    }

    function handleExitApp(){
        BackHandler.exitApp()
    }

    async function loadTransactions(){
        const dataKey = '@continhas:transactions'
        // await AsyncStorage.clear()
        const response = await AsyncStorage.getItem(dataKey);
        const dataTransactions: Transaction[] = response ? JSON.parse(response) : [];

        let data = dataTransactions.filter(x => x.period === monthYear)
                                   .sort()
                                   .reverse()

        const incomeTransactions = data.filter(x => x.type === 'income').sort().reverse()
        const outcomeTransactions = data.filter(x => x.type === 'outcome').sort().reverse()

        const incomeTotal = incomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        const outcomeTotal = outcomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)
        
        setTransactions(data);

        if (data.length > 0){            
            incomeTotal > 0 && setIncomeHighlightData({
                total: incomeTotal,
                lastTransaction: formatDateToHighlight(incomeTransactions[0].date)
            })
            
            outcomeTotal > 0 && setOutcomeHighlightData({
                total: outcomeTotal,
                lastTransaction: formatDateToHighlight(outcomeTransactions[0].date)
            })

            setSumHighlightData({
                total: incomeTotal - outcomeTotal,
                lastTransaction: ''
            })
        }

        setIsLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, [monthYear]));

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
                            <MonthYearSelectButton 
                                monthYear={monthYear}
                                onPress={handleOpenSelectMonthYearModal}
                            />
                        </MonthYearWrapper>
                        <HighlightCards>
                            <HighlightCard 
                                type='income' 
                                amount={incomeHighlightData.total}
                                lastTransaction={incomeHighlightData.lastTransaction}
                            />
                            <HighlightCard 
                                type='outcome' 
                                amount={outcomeHighlightData.total}
                                lastTransaction={outcomeHighlightData.lastTransaction}
                            />
                            <HighlightCard 
                                type='balance' 
                                amount={sumHighlightData.total}
                                lastTransaction={sumHighlightData.lastTransaction}
                            />
                        </HighlightCards>
                    </Header>
                    { transactions.length === 0 ?
                        <NoTransactions>
                            <NoTransactionsTitle>Nenhum lançamento este mês</NoTransactionsTitle>
                            <NoTransactionsText>
                                Cadastre a sua primeira transação do mês de {getMonthByPeriod(monthYear)} clicando em &nbsp;
                                <MiniIcon name="plus-circle"/>
                            </NoTransactionsText>
                            <NoTransactionsImg source={require("../../assets/no-result.png")}/>
                        </NoTransactions> :
                        <Transactions>
                            { transactions.length > 0 && <Title>Listagem</Title> }
                            <TransactionList<any>
                                data={transactions}
                                keyExtrator={(item: Transaction) => item.id}
                                renderItem={({ item }: { item: Transaction }) => <TransactionCard data={item}/>}
                            />
                        </Transactions>
                    }
                </>
            }
            <MonthYearSelectModal
                monthYear={monthYear}
                setMonthYear={setMonthYear}
                closeSelectMonthYear={handleCloseSelectMonthYearModal}
                modalIsOpen={monthYearModalOpen}
            />
        </Container>
    )
}