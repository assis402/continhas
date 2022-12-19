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
    data: Transaction
    deleteFunction: () => void
    updateFunction: () => void
}

export function TransactionCard({ data, deleteFunction, updateFunction }: Props ) {
    const theme = useTheme();
    const category = categories.find(x => x.name === data.category)
    const [nextIndex, setNextIndex] = useState(1);
    const swiperRef = useRef<Swiper>(null);

    return(
        <Container
            // prevButton={<PrevButton/>}
            // nextButton={<NextButton/>}
            ref={swiperRef}
        >
            <TransactionComponent onPress={() => {
                swiperRef.current?.scrollTo(nextIndex)
                setNextIndex(nextIndex === 0 ? 1 : 0)
            }}>
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
                    onPress={updateFunction}
                    iconName={"edit"}
                    iconColor={theme.colors.info}
                />
                <BodilessButton
                    flex={2}
                    title='Apagar'
                    onPress={deleteFunction}
                    iconName={"trash"}
                    iconColor={theme.colors.attention}
                />
            </Options>
        </Container>
    )
}