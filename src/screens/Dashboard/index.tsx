import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Transaction } from '../../classes/Transaction';
import { HighlightCard } from '../../components/HighlightCard'
import { useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components'

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
    TransactionListContainer,
} from './styles'

import { PeriodSelectModal } from '../../modals/PeriodSelectModal';
import { PeriodSelectButton } from '../../components/Forms/PeriodSelectButton';
import TransactionService from '../../services/Transaction';
import { DashboardProps, defaultDashboardProps } from '../../classes/Dashboard';
import { DeleteTransactionModal } from '../Transaction/DeleteTransaction';
import { Modalize } from 'react-native-modalize';
import { BottomModal } from '../../modals/BottomModal';
import { DashboardTransactions } from '../../components/Dahsboard/Transactions';
import { DashboardEmpty } from '../../components/Dahsboard/Empty';
import { Loading } from '../../components/Dahsboard/Loading';
import { BackHandler } from 'react-native';

const today = new Date();
const defaultPeriod = today.getMonth().toString() + today.getFullYear().toString();

interface Props {
    navigation: any
}

export function Dashboard({ navigation }: Props){    
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<DashboardProps>(defaultDashboardProps);

    const [period, setPeriod] = useState(defaultPeriod)
    const [periodModalCloseCounter, setPeriodModalCloseCounter] = useState(0);

    // const [reloadCounter, setReloadCounter] = useState(0);

    const theme = useTheme();

    // function reload(){
    //     setReloadCounter(reloadCounter + 1);
    // }

    function handlePeriod(period: string){
        // reload();  
        openLoading()
        closePeriodModal()
        setTimeout(() => {
            setPeriod(period)            
        }, 200);
        // openLoading() 
        // setIsLoading(true);
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 2000)
        // loadTransactions()
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

    const deleteModal = useRef<Modalize>(null)
    const periodModal = useRef<Modalize>(null)

    function openDeleteModal(){
        deleteModal.current?.open()
    }

    function closeDeleteModal(){
        deleteModal.current?.close()
    }

    function openPeriodModal(){
        periodModal.current?.open()
    }

    function closePeriodModal(){
        periodModal.current?.close()
        setPeriodModalCloseCounter(periodModalCloseCounter + 1)
    };

    function openLoading(){
        setIsLoading(true)
    }

    function closeLoading(){
        setIsLoading(false)
    }

    function renderTransactions() {
        if(transactions.length === 0){
            return (<DashboardEmpty
                        navigateToAddScreen={navigateToAddScreen}
                        navigateToAddFrequentScreen={navigateToAddFrequentScreen}
                    />)
        } else {
            return (
                <DashboardTransactions
                    navigation={navigation}
                    navigateToAddScreen={navigateToAddScreen}
                    navigateToAddFrequentScreen={navigateToAddFrequentScreen}
                    openDeleteModal={openDeleteModal}
                    transactions={transactions}
                />
            )
        }
    }

    async function loadTransactions(){
        setTimeout(() => {
        }, 200);
        // await AsyncStorage.clear()
        let data = await TransactionService.getAllByPeriod(period)
        setTransactions(data);

        if (data.length > 0)
            setHighlightData(TransactionService.getDashboardHighlights(data))      
        
        setTimeout(() => {
            closeLoading()                
        }, 200);
    }

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, [period]));

    // useEffect(() => {
    //     closePeriodModal()
    // }, [period])

    // useEffect(() => { 
    //         openLoading()
    // }, [periodModalCloseCounter])

    return (
        <Container>
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
                        onPress={openPeriodModal}
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
            <TransactionListContainer>
                { renderTransactions() }
            </TransactionListContainer>
            <BottomModal modalize={deleteModal} height={300}>
                <DeleteTransactionModal closeModal={closeDeleteModal}/>         
            </BottomModal>
            <BottomModal modalize={periodModal} height={450}>
                <PeriodSelectModal 
                    closeModal={closePeriodModal}
                    period={period}
                    setPeriod={handlePeriod}
                />         
            </BottomModal>
            <Loading isVisible={isLoading}/>
        </Container>
    )
}