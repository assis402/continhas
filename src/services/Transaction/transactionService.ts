import AsyncStorage from "@react-native-async-storage/async-storage";
import { DashboardProps, HighlightProps } from "../../classes/Dashboard";
import { Transaction } from "../../classes/Transaction";
import { formatDateToHighlight } from "../../utils/helper";
const dataKey = '@continhas:transactions'

export default class TransactionService {
    static async getAllByPeriod(period: string){
        const response = await AsyncStorage.getItem(dataKey);
        const dataTransactions: Transaction[] = response ? JSON.parse(response) : [];
        
        return dataTransactions.filter(x => x.period === period)
                               .sort()
                               .reverse()
    }

    static getDashboardHighlights(transactionList: Transaction[]){
        let dashboard: DashboardProps;

        const incomeTransactions = transactionList.filter(x => x.type === 'income').sort().reverse()
        const outcomeTransactions = transactionList.filter(x => x.type === 'outcome').sort().reverse()

        const incomeTotal = incomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        const outcomeTotal = outcomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        dashboard = {
            income: {
                total: incomeTotal,
                lastTransaction: incomeTotal > 0 
                                 ? formatDateToHighlight(incomeTransactions[0].date)
                                 : ''
            },
            outcome: {
                total: outcomeTotal,
                lastTransaction: outcomeTotal > 0 
                                 ? formatDateToHighlight(outcomeTransactions[0].date)
                                 : ''
            },
            sum: {
                total: incomeTotal - outcomeTotal
            }
        }

        return dashboard;
    }
}