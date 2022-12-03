import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import moment from 'moment';
import { DateLocale } from 'yup/lib/locale';

export function formatAmount(value: Number){
    return new Intl.NumberFormat("pt-BR", {
            style:'currency',
            currency:'BRL',
            maximumFractionDigits: 2,
            minimumFractionDigits: 0
        })
        .format(value as number)
        .replace("-", "-\u0020")
        .replace("R$", "R$\u0020")
}

export function formatDate(dateString: string){
    const date = new Date(dateString);

    // return date.toLocaleDateString('pt-BR', {timeStyle: 'short', dateStyle: 'short'})
    //        + ', dia ' 
    //        + date.toLocaleDateString('pt-BR', {day: 'numeric'}

    return 'dia ' + moment(date).format('DD, HH:MM')
}

export function formatDateToHighlight(date: string){
    return new Date(date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long'
    })
}

export function formatDateToRegister(date: Date){
    return date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long'
    })
}

export function formatTimeToRegister(date: Date){
    return moment(date).format('HH:mm')
}

export function toString2Pad(value: number){
    return value.toLocaleString('pt-BR', {
        minimumIntegerDigits: 2
    })
}

export function detachMonth(monthYear: string){
    return Number.parseInt(monthYear.substring(0,2))
}

export function detachYear(monthYear: string){
    return Number.parseInt(monthYear.substring(2))
}

export function getMonthByPeriod(period: string){
    return monthArray[detachMonth(period)]
}

// export function formatDateToSummary(date: string){
//     return new Date(date).toLocaleDateString('pt-BR', {
//         day: '2-digit',
//         month: '2-digit',
//         year: '2-digit'})
// }

export const categories = [
    { key: 'purchases', name: 'Compras', icon: 'shopping-bag', color: '#5636D3' },
    { key: 'food', name: 'Alimentação', icon: 'coffee', color: '#FF872C' },
    { key: 'salary', name: 'Salário', icon: 'dollar-sign', color: '#12A454' },
    { key: 'car', name: 'Carro', icon: 'crosshair', color: '#E83F5B' },
    { key: 'leisure', name: 'Lazer', icon: 'heart', color: '#26195C' },
    { key: 'studies', name: 'Estudos', icon: 'book', color: '#9C001A' },
]; 

export const monthArray = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('pt-BR', { month: 'long' }))
