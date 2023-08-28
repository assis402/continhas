import React, { useEffect, useRef, useState } from 'react'
import { Transaction }  from '../../classes/Transaction';
import { categories } from "../../utils/helper";
import { formatDate, formatAmount } from '../../utils/helper'
import { 
    First,
    Second,
    Title,
    Amount,
    Container,
    Category,
    Icon,
    Date,
    Options,
    TransactionComponent,
} from './styles'

import { BodilessButton } from '../Buttons/BodilessButton';
import { useTheme } from 'styled-components';
import Swiper from 'react-native-swiper'
import { BottomModal } from '../../modals/BottomModal';
import { DeleteTransactionModal } from '../../screens/Transaction/DeleteTransaction';
import { Modalize } from 'react-native-modalize';
import { MiniButton } from '../Buttons/MiniButton';

interface Props {
    navigation: any
    data: Transaction
    reload: () => void
    openLoading: () => void
    scrollCounter: number
    scrollBackOtherTransactions: () => void
}

export function TransactionCard({ navigation, data, reload, openLoading, scrollCounter, scrollBackOtherTransactions }: Props ) {
    const theme = useTheme();
    const category = categories.find(x => x.name === data.category)
    const swiperRef = useRef<Swiper>(null);

    function navigateToUpdateScreen(){
        navigation.navigate('Update', {
            reload: reload,
            openLoading: openLoading,
            transaction: data
        })

        scrollBack(300, false);
    }

    function scrollToOption() {
        swiperRef.current?.scrollTo(1)   
        scrollBackOtherTransactions();     
    }

    function scrollBack(waitingTime: number, animated?: boolean | undefined) {
        setTimeout(() => {
            swiperRef.current?.scrollTo(0, animated)        
        }, waitingTime)
    }

    function handleOpenDeleteModal(){
        deleteModal.current?.open()        
    }

    function handleCloseDeleteModal(){
        deleteModal.current?.close()
    }

    const deleteModal = useRef<Modalize>(null)

    useEffect(() => {
        scrollBack(1)
    }, [scrollCounter])

    return(
        <>
            <Container
                ref={swiperRef}
                overScrollMode='never'
            >
                <TransactionComponent onPress={scrollToOption}>
                    <First>
                        <Category>
                            <Icon name={category?.icon}/>
                        </Category>
                        <Title>{data.title}</Title>
                    </First>
                    <Second>
                        <Amount type={data.type}>
                            {data.type === 'outcome' ? '- ' : '' }{formatAmount(data.amount)}
                        </Amount>
                        <Date>{formatDate(data.date)}</Date>
                    </Second>
                </TransactionComponent>
                <Options>
                    <MiniButton
                        iconName='chevron-left'
                        onPress={() => scrollBack(0)}
                        width={40}
                        height={30}
                    />
                    
                    <BodilessButton
                        flex={2}
                        title='Editar'
                        onPress={navigateToUpdateScreen}
                        iconName={"edit"}
                        iconColor={theme.colors.info}
                    />
                    <BodilessButton
                        flex={2}
                        title='Apagar'
                        onPress={handleOpenDeleteModal}
                        iconName={"trash"}
                        iconColor={theme.colors.attention}
                    />
                </Options>
            </Container>
            <BottomModal modalize={deleteModal} height={300}>
                <DeleteTransactionModal 
                    transaction={data} 
                    reload={reload} 
                    openLoading={openLoading} 
                    closeModal={handleCloseDeleteModal}/>         
            </BottomModal>
        </>
    )
}