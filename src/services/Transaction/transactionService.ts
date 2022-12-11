import AsyncStorage from "@react-native-async-storage/async-storage";
import { Transaction } from "../../classes/Transaction";
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
        const incomeTransactions = transactionList.filter(x => x.type === 'income').sort().reverse()
        const outcomeTransactions = transactionList.filter(x => x.type === 'outcome').sort().reverse()

        const incomeTotal = incomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        const outcomeTotal = outcomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)
    }
}