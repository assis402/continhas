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
                isFrequent: boolean) {
        let creationDate = new Date()

        this.id = String(uuid.v4())
        this.date = String(creationDate)
        this.period = toString2Pad(creationDate.getMonth()) + creationDate.getFullYear().toString()
        this.type = type as TransactionType;
        this.title = title
        this.amount = Number(amount);
        this.category = category
        this.isFrequent = isFrequent
    }
}