import React, { useCallback, useEffect, useState } from 'react'
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

import { MonthYearSelectModal } from '../../modals/MonthYearSelectModal';
import { MonthYearSelectButton } from '../../components/Forms/MonthYearSelectButton';
import TransactionService from '../../services/Transaction/transactionService';
import { MiniButton } from '../../components/MiniButton';
import { DashboardProps, defaultDashboardProps } from '../../classes/Dashboard';
import { AddModal } from '../../modals/AddModal';
import { UpdateModal } from '../../modals/UpdateModal';
import { DeleteModal } from '../../modals/DeleteModal';
import { AddFrequentModal } from '../../modals/AddFrequentModal';

export function Dashboard(){
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<DashboardProps>(defaultDashboardProps);

    const today = new Date();
    const [monthYearModalOpen, setMonthYearModalOpen] = useState(false)
    const [monthYear, setMonthYear] = useState((today.getMonth()).toString() + today.getFullYear().toString())
    
    const [reloadCounter, setReloadCounter] = useState(0);

    const [addModalOpen, setAddModalOpen] = useState(false)
    const [addFrequentModalOpen, setAddFrequentModalOpen] = useState(false)
    const [updateModalOpen, setUpdateModalOpen] = useState(false)

    const [transactionToDelete, setTransactionToDelete] = useState<Transaction>({} as Transaction)
    const [transactionToUpdate, setTransactionToUpdate] = useState<Transaction>({} as Transaction)

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    const theme = useTheme();

    function reload(){
        setReloadCounter(reloadCounter + 1);
        console.log(reloadCounter)
    }

    function handleMonthYear(monthYear: string){
        reload();
        setMonthYear(monthYear)
    }

    function handleCloseSelectMonthYearModal(){
        setMonthYearModalOpen(false)
    }
    
    function handleOpenSelectMonthYearModal(){
        setMonthYearModalOpen(true)
    }
    
    function handleCloseAddModal(){
        setAddModalOpen(false)
    }

    function handleOpenAddModal(){
        setAddModalOpen(true)
    }

    function handleCloseAddFrequentModal(){
        setAddFrequentModalOpen(false)
    }

    function handleOpenAddFrequentModal(){
        setAddFrequentModalOpen(true)
    }

    function handleCloseDeleteModal(){
        setDeleteModalOpen(false)
    }

    function handleOpenDeleteModal(transaction: Transaction){
        setTransactionToDelete(transaction)
        setDeleteModalOpen(true)
    }

    function handleCloseUpdateModal(){
        setUpdateModalOpen(false)
    }

    function handleOpenUpdateModal(transaction: Transaction){
        setTransactionToUpdate(transaction)
        setUpdateModalOpen(true)
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
                                <TransactionOptions>
                                    <MiniButton
                                        iconName='plus'
                                        flex={1}
                                        onPress={handleOpenAddModal}
                                    />
                                    <Separator/>
                                    <MiniButton
                                        iconName='rotate-cw'
                                        flex={1}
                                        onPress={handleOpenAddFrequentModal}
                                    />
                                </TransactionOptions>
                            </TransactionsHeader>
                            <TransactionList<any>
                                data={transactions}
                                keyExtrator={(item: Transaction) => item.id}
                                renderItem={({ item }: { item: Transaction }) => 
                                    <TransactionCard 
                                        data={item}
                                        deleteFunction={() => handleOpenDeleteModal(item)}
                                        updateFunction={() => handleOpenUpdateModal(item)}
                                    />}
                            />
                        </Transactions>
                    }
                </>
            }
            <AddModal
                modalIsOpen={addModalOpen}
                closeModal={handleCloseAddModal}
                reload={reload}
            />
            <AddFrequentModal
                modalIsOpen={addFrequentModalOpen}
                closeModal={handleCloseAddFrequentModal}
                reload={reload}
            />
            <UpdateModal
                transaction={transactionToUpdate}
                modalIsOpen={updateModalOpen}
                closeModal={handleCloseUpdateModal}
                reload={reload}
            />
            <DeleteModal
                id={transactionToDelete.id}
                transactionTitle={transactionToDelete.title}
                modalIsOpen={deleteModalOpen}
                closeModal={handleCloseDeleteModal}
                reload={reload}
            />
            <MonthYearSelectModal
                monthYear={monthYear}
                setMonthYear={handleMonthYear}
                closeSelectMonthYear={handleCloseSelectMonthYearModal}
                modalIsOpen={monthYearModalOpen}
            />
        </Container>
    )
}