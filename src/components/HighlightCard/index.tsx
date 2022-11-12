import React from 'react'
import { formatAmount } from '../../utils/helper'

import {
    Amount,
    Container, 
    Content, 
    Header, 
    Icon, 
    LastTransaction, 
    Title,
} from './styles'

interface Props {
    type: 'income' | 'outcome' | 'balance';
    amount: Number;
    lastTransaction: string;
}

const title = {
    income: 'Entradas',
    outcome: 'Saídas',
    balance: 'Saldo'
}

const typeValue = {
    income: 'entrada',
    outcome: 'saída',
    balance: 'transação'
}

const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    balance: 'dollar-sign'
}

export function HighlightCard({ type, amount, lastTransaction }: Props){    
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title[type]}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>
            <Content>
                <Amount type={type}>{formatAmount(amount)}</Amount>
                {lastTransaction && 
                    <LastTransaction type={type}>{'Última ' + typeValue[type] + ' dia ' + lastTransaction}</LastTransaction>
                }
            </Content>
        </Container>
    )
}