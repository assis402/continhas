import uuid from 'react-native-uuid'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { toString2Pad } from "../utils/helper"

export type TransactionType = 'income' | 'outcome'

export class Transaction {
    id!: string
    type!: 'income' | 'outcome'
    title!: string
    amount!: number
    category!: string
    date!: string
    period!: string
    isFrequent!: boolean
}

export class TransactionFactory {
    static new(type: string,
               title: string,
               amount: string,
               category: string,
               isFrequent: boolean) : Transaction {
        let newTransaction = new Transaction()
        const creationDate = new Date()

        newTransaction.id = String(uuid.v4())
        newTransaction.date = String(creationDate)
        newTransaction.period = toString2Pad(creationDate.getMonth()) + creationDate.getFullYear().toString()
        newTransaction.type = type as TransactionType
        newTransaction.title = title
        newTransaction.amount = Number(amount)
        newTransaction.category = category
        newTransaction.isFrequent = isFrequent

        return newTransaction;
    }
}