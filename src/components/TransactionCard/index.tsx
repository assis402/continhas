import React, { useRef, useState } from 'react'
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
    PrevButton,
    NextButton
} from './styles'

import { BodilessButton } from '../Buttons/BodilessButton';
import { useTheme } from 'styled-components';
import { View } from 'react-native';
import Swiper from 'react-native-swiper'

interface Props {
    navigation: any
    data: Transaction
    deleteModal: () => void
}

export function TransactionCard({ navigation, data, deleteModal }: Props ) {
    const theme = useTheme();
    const category = categories.find(x => x.name === data.category)
    const [nextIndex, setNextIndex] = useState(1);
    const swiperRef = useRef<Swiper>(null);

    function navigateToUpdateScreen(){
        navigation.navigate('Update')
    }

    function navigateToDeleteScreen(){
        navigation.navigate('Delete')
        navigation.setOptions({
            tabBarStyle: {
                opacity: 0
            }
        })
    }

    function handleMoveSwiper(){
        swiperRef.current?.scrollTo(nextIndex)
        setNextIndex(nextIndex === 0 ? 1 : 0)
    }

    return(
        <Container
            // prevButton={<PrevButton/>}
            // nextButton={<NextButton/>}
            ref={swiperRef}
        >
            <TransactionComponent onPress={handleMoveSwiper}>
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
                    onPress={deleteModal}
                    iconName={"trash"}
                    iconColor={theme.colors.attention}
                />
            </Options>
        </Container>
    )
}