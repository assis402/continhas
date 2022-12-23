import { Transaction } from "../../../classes/Transaction";
import { MiniButton } from "../../Buttons/MiniButton";
import { TransactionCard } from "../../TransactionCard";
import { Container, Header, Options, Separator, Title, TransactionList } from "./styles";

interface Props {
    navigation: any
    transactions: Transaction[]
    navigateToAddScreen: () => void
    navigateToAddFrequentScreen: () => void
    openDeleteModal: () => void
}

export function DashboardTransactions({ navigation,
                                        navigateToAddFrequentScreen,
                                        navigateToAddScreen,
                                        openDeleteModal,
                                        transactions
                                      }: Props){
    return(
        <Container>
            <Header>
                <Title>Lançamentos</Title>
                <Options>
                    <MiniButton
                        iconName='plus'
                        flex={1}
                        onPress={navigateToAddScreen}
                    />
                    <Separator/>
                    <MiniButton
                        iconName='rotate-cw'
                        flex={1}
                        onPress={navigateToAddFrequentScreen}
                    />
                </Options>
            </Header>
            <TransactionList<any>
                data={transactions}
                keyExtrator={(item: Transaction) => item.id}
                renderItem={({ item }: { item: Transaction }) => 
                    <TransactionCard
                        navigation={navigation}
                        data={item}
                        deleteModal={openDeleteModal}
                    />}
            />
        </Container>
    )
}
