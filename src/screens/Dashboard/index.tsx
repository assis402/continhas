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
} from './styles'

import { MonthYearSelectModal } from '../../modals/MonthYearSelectModal';
import { MonthYearSelectButton } from '../../components/Forms/MonthYearSelectButton';
import TransactionService from '../../services/Transaction/transactionService';
import { MiniOutlinedButton } from '../../components/MiniOutlinedButton';
import { DashboardProps, defaultDashboardProps } from '../../classes/Dashboard';
import { RegisterModal } from '../../modals/RegisterModal';
import { UpdateModal } from '../../modals/UpdateModal';
import { DeleteModal } from '../../modals/DeleteModal';

export function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<DashboardProps>(defaultDashboardProps);

    const today = new Date();
    const [monthYearModalOpen, setMonthYearModalOpen] = useState(false)
    const [monthYear, setMonthYear] = useState((today.getMonth()).toString() + today.getFullYear().toString())
    const [registerModalOpen, setRegisterModalOpen] = useState(false)
    const [updateModalOpen, setUpdateModalOpen] = useState(false)

    const [idToDelete, setIdToDelete] = useState('')
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const theme = useTheme();

    function handleCloseSelectMonthYearModal(){
        setMonthYearModalOpen(false)
    }
    
    function handleOpenSelectMonthYearModal(){
        setMonthYearModalOpen(true)
    }
    
    function handleCloseRegisterModal(){
        setRegisterModalOpen(false)
    }

    function handleOpenRegisterModal(){
        setRegisterModalOpen(true)
    }

    function handleCloseUpdateModal(){
        setUpdateModalOpen(false)
    }

    function handleOpenUpdateModal(){
        setUpdateModalOpen(true)
    }

    function handleCloseDeleteModal(){
        setDeleteModalOpen(false)
    }

    function handleOpenDeleteModal(id: string){
        setIdToDelete(id)
        setDeleteModalOpen(true)
    }

    function handleExitApp(){
        BackHandler.exitApp()
    }

    async function loadTransactions(){
        const dataKey = '@continhas:transactions'
        // await AsyncStorage.clear()
        let data = await TransactionService.getAllByPeriod(monthYear)
        setTransactions(data);

        if (data.length > 0)
            setHighlightData(TransactionService.getDashboardHighlights(data))             

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
                                Cadastre a sua primeira transação do mês de {getMonthByPeriod(monthYear)} clicando em &nbsp;
                                <MiniIcon name="plus-circle"/>
                            </NoTransactionsText>
                            <NoTransactionsImg source={require("../../assets/no-result.png")}/>
                        </NoTransactions> :
                        <Transactions>
                            <TransactionsHeader>
                                <Title>Lançamentos</Title>
                                <MiniOutlinedButton
                                    title='Novo'
                                    iconName='plus'
                                    flex={1}
                                    onPress={handleOpenRegisterModal}
                                />
                            </TransactionsHeader>
                            <TransactionList<any>
                                data={transactions}
                                keyExtrator={(item: Transaction) => item.id}
                                renderItem={({ item }: { item: Transaction }) => 
                                    <TransactionCard 
                                        data={item}
                                        deleteFunction={() => handleOpenDeleteModal(item.id)}
                                        // updateFunction={() => handleTransactionToUpdate(item.id)}
                                    />}
                            />
                        </Transactions>
                    }
                </>
            }
            <RegisterModal
                modalIsOpen={registerModalOpen}
                closeModal={handleCloseRegisterModal}
            />
            {/* <UpdateModal
                transaction={}
                modalIsOpen={updateModalOpen}
                closeModal={handleCloseUpdateModal}
            /> */}
            <DeleteModal
                id={idToDelete}
                modalIsOpen={deleteModalOpen}
                closeModal={handleCloseDeleteModal}
            />
            <MonthYearSelectModal
                monthYear={monthYear}
                setMonthYear={setMonthYear}
                closeSelectMonthYear={handleCloseSelectMonthYearModal}
                modalIsOpen={monthYearModalOpen}
            />
        </Container>
    )
}