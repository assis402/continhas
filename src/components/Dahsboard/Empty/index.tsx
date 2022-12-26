import { getMonthByPeriod } from "../../../utils/helper";
import { MiniButton } from "../../Buttons/MiniButton";
import { Container, Icon, Img, Title, Text, Options, Header, Separator, Body } from "./styles";

interface Props {
    navigateToAddScreen: () => void
    navigateToAddFrequentScreen: () => void
}

export function DashboardEmpty({navigateToAddScreen, navigateToAddFrequentScreen}: Props){
    return(
        <Container>
            <Header>
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
            <Body>
                <Title>Nenhum lançamento {`\n`} neste mês</Title>
                <Text>
                    Cadastre o primeiro lançamento deste mês clicando em &nbsp;
                    <Icon name="plus"/>
                </Text>
                <Img source={require("../../../assets/no-result.png")}/>
            </Body>
        </Container>
    )
}