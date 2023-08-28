import { useTheme } from "styled-components";
import { Transaction } from "../../../classes/Transaction";
import { MiniButton } from "../../Buttons/MiniButton";
import { TransactionCard } from "../../TransactionCard";
import { Container, Header, Options, Separator, Title, TransactionList, WhiteShadow } from "./styles";
import { useState } from "react";

interface Props {
    navigation: any
    transactions: Transaction[]
    navigateToAddScreen: () => void
    navigateToAddFrequentScreen: () => void
    openLoading: () => void
    reload: () => void
}

export function DashboardTransactions({ navigation,
                                        transactions,
                                        navigateToAddFrequentScreen,
                                        navigateToAddScreen,
                                        openLoading,
                                        reload
                                      }: Props){
    const theme = useTheme()
    const [scrollCounter, setScrollCounter] = useState(0);   

    function scrollBackTransactions() {
        setScrollCounter(scrollCounter + 1);
    }
    
    return(
        <Container>
            <Header>
                <Title>Lançamentos</Title>
                <Options>
                    <MiniButton
                        iconName='plus'
                        onPress={navigateToAddScreen}
                    />
                    {/* TODO: Botão de transação frequente */}
                    {/* <Separator/>
                    <MiniButton
                        iconName='rotate-cw'
                        onPress={navigateToAddFrequentScreen}
                    /> */}
                </Options>
            </Header>
            <WhiteShadow colors={theme.colors.gradient_white}/>
            <TransactionList<any>
                data={transactions}
                keyExtrator={(item: Transaction) => item.id}
                renderItem={({ item }: { item: Transaction }) => 
                    <TransactionCard
                        navigation={navigation}
                        data={item}
                        openLoading={openLoading}
                        reload={reload}
                        scrollCounter={scrollCounter}
                        scrollBackOtherTransactions={scrollBackTransactions}
                    />}
                overScrollMode='never'
            />
        </Container>
    )
}
