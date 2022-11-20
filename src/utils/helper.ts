import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import moment from 'moment';

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

export function toString2f(value: number){
    return value.toLocaleString('pt-BR', {
        minimumIntegerDigits: 2
    })
}

// export function formatDateToSummary(date: string){
//     return new Date(date).toLocaleDateString('pt-BR', {
//         day: '2-digit',
//         month: '2-digit',
//         year: '2-digit'})
// }