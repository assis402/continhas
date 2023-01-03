import { useTheme } from "styled-components";
import { Transaction } from "../../../classes/Transaction";
import { MiniButton } from "../../Buttons/MiniButton";
import { TransactionCard } from "../../TransactionCard";
import { Container, Header, Options, Separator, Title, TransactionList, WhiteShadow } from "./styles";

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
    // const [isRefreshing, setIsRefreshing] = useState(false);

    // const onRefresh = useCallback(() => {
    //         setIsRefreshing(true);
    //         setTimeout(() => {
    //             setIsRefreshing(false)
    //         }, 2000)
    // }, []);
    
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
                    />}
                overScrollMode='never'
                // refreshing={sRefreshing}
                // onRefresh={onRefresh}
            />
        </Container>
    )
}
