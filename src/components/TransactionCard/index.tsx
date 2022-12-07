import React from 'react'
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
    Separator
} from './styles'

import { BodilessButton } from '../Forms/BodilessButton';
import { useTheme } from 'styled-components';

interface Props {
    data: Transaction
    deleteFunction: () => void
}

export function TransactionCard({ data, deleteFunction }: Props ) {
    const theme = useTheme();
    const category = categories.find(x => x.name === data.category)

    return(
        <Container>
            <TransactionComponent>
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
                    onPress={(data) => {}}
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