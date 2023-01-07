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

    constructor(type: string,
                title: string,
                amount: string,
                category: string,
                date: Date,
                isFrequent: boolean) {

        this.id = String(uuid.v4())
        this.date = String(date)
        this.period = toString2Pad(date.getMonth()) + date.getFullYear().toString()
        this.type = type as TransactionType;
        this.title = title
        this.amount = Number(amount);
        this.category = category
        this.isFrequent = isFrequent
    }
}