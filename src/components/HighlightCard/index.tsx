import React from 'react'
import { formatAmount } from '../../utils/helper'
import { useTheme } from 'styled-components'

import {
    Amount,
    Container, 
    Content, 
    Header, 
    Icon, 
    LastTransaction, 
    Title,
} from './styles'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
    type: 'income' | 'outcome' | 'balance';
    amount: Number;
    lastTransaction: string;
    isLoading: boolean
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

const gradients = () => {
    const theme = useTheme();

    return {
        income: theme.colors.gradient_success,
        outcome: theme.colors.gradient_attention,
        balance: theme.colors.gradient_balance
    }
}

const shimmerColors = () => {
    const theme = useTheme();

    return {
        income: theme.colors.gradient_success_placeholder,
        outcome: theme.colors.gradient_attention_placeholder,
        balance: theme.colors.gradient_balance_placeholder
    }
}

export function HighlightCard({ type, amount, lastTransaction, isLoading }: Props){    
    const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
    const theme = useTheme();
    const firstShimerStyle = { marginBottom: RFValue(17), marginTop: RFValue(8), opacity: 0.5 }
    const secondShimerStyle = { opacity: 0.5 }

    return (
        <Container 
            type={type}
            colors={gradients()[type]}
        >
            <Header>
                <Title type={type}>{title[type]}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>
            <Content>
                <ShimmerPlaceholder visible={!isLoading} height={RFValue(32)} width={RFValue(160)} shimmerColors={shimmerColors()[type]} shimmerStyle={firstShimerStyle}>
                    <Amount type={type}>{formatAmount(amount)}</Amount>
                </ShimmerPlaceholder>
                <ShimmerPlaceholder visible={!isLoading} height={RFValue(12)} width={RFValue(220)} shimmerColors={shimmerColors()[type]} shimmerStyle={secondShimerStyle}>
                    { lastTransaction && <LastTransaction type={type}>{'Última ' + typeValue[type] + ' dia ' + lastTransaction}</LastTransaction> }
                </ShimmerPlaceholder>
            </Content>
        </Container>
    )
}