import AsyncStorage from "@react-native-async-storage/async-storage";
import { DashboardProps } from "../../classes/Dashboard";
import { Transaction } from "../../classes/Transaction";
import { formatDateToHighlight } from "../../utils/helper";
const dataKey = '@continhas:transactions'

export default class TransactionService {
    static async getAll(){
        const response = await AsyncStorage.getItem(dataKey);
        const transactions: Transaction[] = response ? JSON.parse(response) : [];

        return transactions;
    }

    static async getAllByPeriod(period: string){
        const transactions = await this.getAll();
        
        return transactions.filter(x => x.period === period)
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

    static async update(updatedTransaction: Transaction){
        const transactions = await this.getAll()
        const index = transactions.findIndex((x => x.id == updatedTransaction.id));

        transactions[index] = updatedTransaction

        await AsyncStorage.setItem(dataKey, JSON.stringify(transactions))
    }
}