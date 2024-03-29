import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Transaction } from '../../classes/Transaction';
import { HighlightCard } from '../../components/HighlightCard'
import { useFocusEffect } from '@react-navigation/native'
import { toString2Pad } from '../../utils/helper'

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
import { Modalize } from 'react-native-modalize';
import { BottomModal } from '../../modals/BottomModal';
import { DashboardTransactions } from '../../components/Dahsboard/Transactions';
import { DashboardEmpty } from '../../components/Dahsboard/Empty';
import { Loading } from '../../components/Dahsboard/Loading';
import { BackHandler } from 'react-native';
import { notifyError, notifySucccess } from '../../utils/notifications';

const today = new Date();
const defaultPeriod = toString2Pad(today.getMonth()) + today.getFullYear().toString();

interface Props {
    navigation: any
}

export function Dashboard({ navigation }: Props){  
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<DashboardProps>(defaultDashboardProps);
    
    const [period, setPeriod] = useState(defaultPeriod)
    const [reloadCounter, setReload] = useState(0);
    const [loadingCloseCounter, setLoadingClose] = useState(0);
        
    function handlePeriod(period: string){
        closePeriodModal()
        openLoading()
        setPeriod(period)            
    }

    function navigateToAddScreen(){
        navigation.navigate('Add', {
            reload: reloadTransactions,
            openLoading: openLoading
        })
    }
    
    function reloadTransactions(){
        setReload(reloadCounter + 1)            
    }

    function navigateToAddFrequentScreen(){
        navigation.navigate('AddFrequent', {
            reload: reloadTransactions,
            openLoading: openLoading
        })
    }

    function handleExitApp(){
        BackHandler.exitApp()
    }

    const periodModal = useRef<Modalize>(null)

    function openPeriodModal(){
        periodModal.current?.open()
    }

    function closePeriodModal(){
        periodModal.current?.close()
    };

    const openLoading = useCallback(() => {setIsLoading(true)}, [])

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
                    transactions={transactions}
                    openLoading={openLoading}
                    reload={reloadTransactions}
                />
                )
        }
    }

    async function loadTransactions(){
        // await AsyncStorage.clear()
        let data = await TransactionService.getAllByPeriod(period)
        setTransactions(data);

        if (data.length > 0)
            setHighlightData(TransactionService.getDashboardHighlights(data))
        else
            setHighlightData(defaultDashboardProps)
        
        // setLoadingClose(loadingCloseCounter + 1)             
        closeLoading()
    }

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, [period, reloadCounter]));

    // useEffect(() => {
    //     closeLoading()
    // }, [loadingCloseCounter])

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
                        isLoading={isLoading} 
                        type='income' 
                        amount={highlightData.income.total}
                        lastTransaction={highlightData.income.lastTransaction}
                    />
                    <HighlightCard
                        isLoading={isLoading} 
                        type='outcome' 
                        amount={highlightData.outcome.total}
                        lastTransaction={highlightData.outcome.lastTransaction}
                    />
                    <HighlightCard
                        isLoading={isLoading}
                        type='balance'
                        amount={highlightData.sum.total}
                        lastTransaction=''
                    />
                </HighlightCards>
            </Header>
            <TransactionListContainer>
                { isLoading && <Loading/> }
                { renderTransactions() }
            </TransactionListContainer>
            <BottomModal modalize={periodModal} height={450}>
                <PeriodSelectModal 
                    period={period}
                    setPeriod={handlePeriod}
                />         
            </BottomModal>
        </Container>
    )
}