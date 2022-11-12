import uuid from 'react-native-uuid'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export type TransactionType = 'income' | 'outcome'

export class Transaction {
    id!: string
    type!: 'income' | 'outcome'
    title!: string
    amount!: number
    category!: string
    date!: string
}

export class TransactionFactory {
    static new(type: string,
               title: string,
               amount: string,
               category: string) : Transaction {
        var newTransaction = new Transaction()

        const creationDate = new Date()

        newTransaction.id = String(uuid.v4())
        newTransaction.date = String(creationDate)
        newTransaction.type = type as TransactionType
        newTransaction.title = title
        newTransaction.amount = Number(amount)
        newTransaction.category = category

        return newTransaction;
    }

    // static fromGet(id: string,
    //                type: string,
    //                title: string,
    //                amount: string,
    //                category: Category,
    //                date: string) : Transaction {
    //     var transaction = new Transaction()

    //     transaction.id = id
    //     transaction.date = date
    //     transaction.type = type as TransactionType
    //     transaction.title = title
    //     transaction.amount = amount
    //     transaction.category = category

    //     return transaction;
    // }
}