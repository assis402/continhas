import { getMonthByPeriod } from "../../../utils/helper";
import { Container, Icon, Img, Title, Text } from "./styles";

interface Props {
    period: string;
}

export function DashboardEmpty({ period }: Props){
    return(
        <Container>
            <Title>Nenhum lançamento este mês</Title>
            <Text>
                Cadastre a sua primeira transação do mês de {getMonthByPeriod(period)} clicando em &nbsp;
                <Icon name="plus-circle"/>
            </Text>
            <Img source={require("../../../assets/no-result.png")}/>
        </Container>
    )
}